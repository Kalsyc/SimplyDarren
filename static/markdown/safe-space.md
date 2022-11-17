<h1 align="center">SafeSpace</h1>

<h2 align="center">CS4240 Virtual Reality Project</h2>

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:500px" src="/img/projects/safespace-img.png" width="90%" height="auto" />
</p>

## Preface

PetSaver is a student project from the module CS4240: Interaction Design in Augmented and Virtual Reality @ National University of Singapore (NUS). I took this module in AY20/21 Semester 2 under Prof Anand Bhojan. In hindsight, this project was really **challenging** to do due to the pandemic. We had to work remotely midway through the project and **only one of us** could run the application to test as our group shared a single headset. _Unfortunately, that poor soul is me._ Anyways, we managed to achieve **2nd place in the showcase**, so I guess the effort paid off :) Thanks to all who voted!

## About the Project

Mental health issues are increasingly rampant amongst people today with 1 out of 7 people in Singapore having experienced some form of mental disorder in their lifetime. Coupled with the heavy social stigma against mental disorders, there is a need to raise awareness about mental health issues as they can affect anyone, regardless of age, gender or race.

Developed using Unity, SafeSpace is a VR mental health solution that aims to bring a greater level of awareness and understanding of anxiety disorders through two main gameplay modes:

- An anxiety simulator where users can step into the shoes of an anxiety sufferer in a stressful yet familiar office environment
- A mindfulness solution in the form of a VR meditation therapy which has the goal of treating and controlling anxiety attacks and stress-related disorders

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:700px" src="/img/projects/safespace/anxiety.png" width="90%" height="auto" />
  <figcaption>Scenario played during the anxiety simulator</figcaption>
</p>

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:700px" src="/img/projects/safespace/env.png" width="90%" height="auto" />
  <figcaption>Players can choose the environment to meditate in</figcaption>
</p>

<p align="center">
  <img alt="" style="margin: 0 auto; object-fit:fill; max-width:700px" src="/img/projects/safespace/meditation.png" width="90%" height="auto" />
  <figcaption>Meditation Scene</figcaption>
</p>

## Personal Contribution

As the only member of the team who has access to the headset, I did the integration and the testing for the most part. I was also responsible for writing in the gaze-tracker for UI interactions.

## Technical Details

We used Unity3D for this VR application, combined with a bunch of VR-related SDKs such as TobiiXR, SRanipal, SRWorks, ViveSR, etc.

For this application, we used the HTC Vive Pro Eye for its advanced eye-tracking technology which was used to navigate our user interface through gazing at the buttons. However, you can also run the application with the normal HTC Vive in which it takes the center of your view as your gaze point.

### Minimum Specifications & Software/Hardware:

- Windows 10 only
- VR-enabled Graphics Card (NVIDIA GeForce 1060 minimum)
- 1GB worth of space
- SteamVR installed
- Ensure that Tobii Service (TobiiXR) & SR_Runtime is running in order to play
- HTC Vive Pro Eye or Tobii XR headsets with eye-tracking enabled

## Useful Links

It is actually possible to download and try our application. Make sure you follow the instructions listed on our README on the GitHub repository!

[GitHub Repo](https://github.com/Kalsyc/SafeSpace)

Our submission to the iSTePS showcase as well as the promotion video can be found here:

[Our iSTePS submission](https://isteps.comp.nus.edu.sg/event/cs4240/module/AY2019-20+Semester_2+Task_1/project/7)

[SafeSpace Promo Video](https://www.youtube.com/watch?v=DXkq3lLcZkI)
