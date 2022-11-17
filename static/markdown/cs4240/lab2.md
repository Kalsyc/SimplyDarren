<h1 align="center">Lab 2 - Scripting with C# in Unity</h1>

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:600px" src="/img/unity-tut/lab2/roll-header-img.png" width="90%" height="auto" />
</p>

## Preface

Great! Now that you have mastered the Unity Engine. It's time to code and have a small running game! This time, we will do a “Roll a Ball” game. You can either use the same project from Lab 1 or create a new one, just make sure that you use a different scene this time!

## Building the Surface

Before we place our player in the game, let's first define the ground in which our player will roll on. Click on the + sign next to Hierarchy (or from GameObject above) > 3D Object > Plane to create a plane in your scene. You may rename it as Ground.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:400px" src="/img/unity-tut/lab2/roll-ground-img.png" width="90%" height="auto" />
</p>

Next, set its position as (0, 0, 0) and its scale as (2, 1, 2) in the Inspector Panel under the Transform Component.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:300px" src="/img/unity-tut/lab2/roll-plane-img.png" width="90%" height="auto" />
</p>

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:500px" src="/img/unity-tut/lab2/roll-plane2-img.png" width="90%" height="auto" />
</p>

After you have created the ground, let's create our Player! You can click GameObject > 3D Object > Sphere to create a ball in your scene and rename it as “Player”.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:600px" src="/img/unity-tut/lab2/roll-player-img.png" width="90%" height="auto" />
</p>

You should set the position of this ball as (0, 0.5, 0) in the Inspector to make this ball perfectly stand on the plane.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:300px" src="/img/unity-tut/lab2/roll-player2-img.png" width="90%" height="auto" />
</p>

At Project panel, right click and choose Create > Folder. You can name this folder as “Materials”. Then right click this folder and choose Create > Material to create a new material, named as “Background”. You can choose your favorite color at Albedo to set this material color. Afterwards, drag it to the plane within the Scene to colour it. Alternatively, you can change the materials in the Mesh Renderer component in the Ground GameObject.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-ground2-img.png" width="90%" height="auto" />
</p>

## Player Locomotion

To add physical properties to this ball and make it be able to move, we need to add Rigidbody to it. You need to choose Player at Hierarchy panel and click Add Component at Inspector panel. Search for Ridigbody and click it to add it to your Player.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:400px" src="/img/unity-tut/lab2/roll-locomotion-img.png" width="90%" height="auto" />
</p>

A Rigidbody component adds control of Unity's Physics Engine to the GameObject. Even without adding any code, a Rigidbody object will be pulled downward by gravity and will react to collisions with incoming objects if the right Collider component is also present.

The Rigidbody also has a scripting API that lets you apply forces to the object and control it in a physically realistic way. For example, a car's behaviour can be specified in terms of the forces applied by the wheels. Given this information, the physics engine can handle most other aspects of the car's motion, so it will accelerate realistically and respond correctly to collisions.

Next, let's add a custom C# Script so that we can take in Player Input and allow us to move our player ball.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:300px" src="/img/unity-tut/lab2/roll-locomotion2-img.png" width="90%" height="auto" />
</p>

We can do so by clicking on Add Component in the Inspector panel of Player, type in the name of our C# class script, hit New Script > Create and Add. This creates a PlayerLocomotion.cs file that we can edit in VSCode/Visual Studio.

Note that scripts can always be dragged in from your project folder. You can also choose to create the C# script within a separate folder in Project for better organization as adding scripts via the Inspector places the script in the root Assets folder by default.

After creating the PlayerLocomotion.cs script, double click it to edit it in VSCode/Visual Studio.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:600px" src="/img/unity-tut/lab2/roll-code-img.png" width="90%" height="auto" />
</p>

Now before we get started on coding. There are a few things that you need to know about coding in C# in Unity. Each C# class that runs in Unity can only be attached to a GameObject if it inherits from the base class MonoBehaviour.

The MonoBehaviour base class is derived from the UnityEngine in which it gives access to special lifecycle methods in Unity. These lifecycle methods basically determine how a component should function during the game loop.

[Complete Lifecycle Graph of Unity](https://docs.unity3d.com/uploads/Main/monobehaviour_flowchart.svg)

What the above link illustrates is basically how Unity runs the game loop and logic. Some functions are invoked at the start of instantiation such as Awake() and Start(), whilst others run every frame such as Update().

However, for most intents and purposes, you only need to be concerned with a few lifecycle methods:

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-code2-img.png" width="90%" height="auto" />
</p>

**Awake()**: This method starts before the first Update() call and even when the script is not enabled. Awake() gets called during initialisation no matter what. It's probably the most useful method to include if you want to instantiate some references. This can include getting references from other components via GetComponent<>.

**Start()**: This method starts upon the script being enabled (only once) and after Awake() (but before the first Update() call). Use this function if you wish to instantiate references or objects once the script has been enabled. There's also an OnEnable() lifecycle function that you can implement which runs every time the script is enabled.

**FixedUpdate()**: Called by Physics Engine in fixed intervals. Usually used for time-dependent/physics related functions such as triggers and collisions

**Update()**: Gets called every frame. Usually for input/locomotion. As this function runs every frame (If a game is 100fps, this function gets called 100 times!), ensure that this function does not carry too much overhead or do too much work as it will massively slow down the entire application/game.

**LateUpdate()** Gets called after all Update() methods are processed. Usually for camera control.

Order of Execution is normally Awake -> Start -> Update -> LateUpdate -> Update -> LateUpdate and so on...

Since we are using physics for this small game, let's use FixedUpdate instead of Update to capture our input. Although using Update() is mostly fine, FixedUpdate() is preferred as we are going to deal with physical action involving the Rigidbody.

You may also delete the empty Start method as we will be using Awake instead.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-code3-img.png" width="90%" height="auto" />
</p>

We need to catch your input to this game, so we need Input.GetAxis() to get it. In default setting, Horizontal is mapped to A, D, ←, → and Vertical is mapped to W, S, ↑, ↓. Then we can create a vector to record to movement.

To add this movement to your ball, you need to get the Rigidbody of this ball because a force only works on the Rigidbody. To get the reference of the rigidbody, you need to create a private variable Rigidbody rd, and initialize it in Awake(). The function GetComponent<>() is used to get specific component of your game object. In <>, you need to write the data type.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-code4-img.png" width="90%" height="auto" />
</p>

Then, to add the movement to the ball, you need to write one more line in FixedUpdate(). AddForce() is used to add a force vector to a Rigidbody.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-code5-img.png" width="90%" height="auto" />
</p>

To make this force more flexible, you can add one more variable speed. In order to make it shown in the inspector panel, you can add the keyword **[SerializeField]** to the private variable and assign it a default value of 1f.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-code6-img.png" width="90%" height="auto" />
</p>

Now, you can set any value to the speed in the inspector and testplay your ball. Hit Play on the Editor and use your arrow keys/WASD, you will see it can move!

## Camera Control

To make this game more user-friendly, we need to make the camera follow your Player. To achieve this, we need to tie our camera to the Player. First, click your Main Camera in Hierarchy panel. We need to set its position as (0, 10, -10) and its rotation as (45, 0, 0). Now it is a third-player view to your Player.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-code7-img.png" width="90%" height="auto" />
</p>

Then, we need to add some scripts to make our camera move following the Player. We need to create a new script “CameraControl” and attach it onto the Main Camera. The LateUpdate() is to guarantee that all the update has been done in each frame and then update this function.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-code8-img.png" width="90%" height="auto" />
</p>

After completing this script, you need to drag the Player in the Hierarchy panel onto the player in Inspector of CameraControl so that you get the reference. The reason we have to do this is because the Camera and the Player are two separate GameObjects and that this the only way that the camera is able to get the reference of the player. (Yes, there are other ways, but this will do for this current game)

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:500px" src="/img/unity-tut/lab2/roll-code9-img.png" width="90%" height="auto" />
</p>

Now press play and move the ball! You will realize that your camera now follows the ball wherever you move!

## Create Pick-Up Items

As you play with your ball, you will find it will drop off from the plane. We need to add some walls to this plane. You need to create an empty object first and rename it as “Wall”. Then add 4 Cubes as the children of this Wall object. It should look like this.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-item-img.png" width="90%" height="auto" />
</p>

Now we will start to add some pick-up items to this game.

Firstly, we create a cube named Pickup with these properties.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:400px" src="/img/unity-tut/lab2/roll-item2-img.png" width="90%" height="auto" />
</p>

Then, we add a script named “Rotator” to it to make it rotate all the time.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-item3-img.png" width="90%" height="auto" />
</p>

Now, we create a new folder named “Prefabs”. We need to create a new material for the Pickup and I choose yellow as the color. Then, you can drag your Pickup object from Hierarchy to the Prefabs folder to save it as a prefab.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:800px" src="/img/unity-tut/lab2/roll-item4-img.png" width="90%" height="auto" />
</p>

After creating the prefab, you can add a few more pick-up items in your scene. If you wish to modify any further, you can simply modify within the prefab and all your pickup cubes will change. How neat!

Now, we need to make our ball be able to collect the items. To start, I have to introduce the Collider. You will find that there are colliders on both Player and Pickup. They are used for judging whether this object has collision with other objects which have collider. Now your Player cannot enter Pickup, but after you mark the IsTrigger on the Pickup prefab. Your Player is able to enter Pickup, and then we can detect this collision in our following steps.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:400px" src="/img/unity-tut/lab2/roll-item5-img.png" width="90%" height="auto" />
</p>

The one more thing we need to do is to add a tag to this object. You need to click tag and add a new tag named “Pickup”.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:400px" src="/img/unity-tut/lab2/roll-item6-img.png" width="90%" height="auto" />
</p>

Now we need to edit the PlayerControl script to detect the collision and make some actions. We need to add one more function in this script.

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:500px" src="/img/unity-tut/lab2/roll-item7-img.png" width="90%" height="auto" />
</p>

OnTriggerEnter is the default function of Unity3D to detect the collision between objects. What we need to do is to set the pick-up item invisible as our ball hit them.

Therefore, we need to check whether the object entering is “Pickup”, and if it is Pickup, we need to set SetActive as false and it will become invisible (or destroy it if you don't need via GameObject.Destroy()).

Congrats! You have created a simple game :) Try and experiment more and play around~ Add things such as a UI to show how many pick-up items you have collected or another player action such as Jump!

[Original Post](https://varlabs.comp.nus.edu.sg/unitylab/learn/core_2.html)

_Written By Darren Sim (Last Updated 26 Jan 2022)_
