# Beginner Activities

The following are a list of activities organized by groups:

## Convert Kilos to Pounds Function
- Difficulty level: Beginner
- Time estimate: 30 min

Directions written in the CodePen: 
https://codepen.io/tienlindavu/pen/EMZGBW?editors=0010#0

---

## Basic For Loop
- Difficulty level: Beginner
- Time estimate: 30 min to an hour

Directions are in the CodePen:
https://codepen.io/tienlindavu/pen/zbZmKN?editors=0010#0

---

## Coffee Shop Function
- Difficulty level: Beginner to Intermediate
- Time estimate: 30 min to an hour

Directions are in the CodePen:
https://codepen.io/tienlindavu/pen/drvqzO?editors=0010

---

## DOM Manipulation
- [Quote Changer](quote-changer)
- [Rock, Paper, Scissors](rock-paper-scissors)

---

# Conceptual Lessons

---

## A Definition for `this`
- Difficulty level: Beginner to Intermediate
- Time estimate: up to you, this is a conceptual lesson so don't rush it! Take a dissection approach to make sure you understand what's happening. Try talking to peers to see if any of you can define it. Ask for help. The `this` keyword is one of the most confusing and important things in JS.

Definition -> In JS, the keyword `this` refers to the object that it belongs to. In a function - the value of `this` is determined by how a function is called. 

Check out this code pen (you should get some alert boxes pop up)! If for some reason the boxes don't pop up, you can copy and paste the code into your developers console see that alert boxes.

https://codepen.io/tienlindavu/pen/NJpBgd?editors=0010#0

At first glance, you might be tempted to assume that "Meow!" will alert two times and "Woof!" will not alert at all. But let's break it down:

When `cat.makeNoise()`` is called, `this.noise` is the same thing as `cat.noise`. Then, when `dog.makeNoise() is called, `this` changes because it refers to the object that called the function. Now it refers to `dog` instead of `cat`, therefore `this.noise` is the same as `cat.noise`.

Here's an alternate way to write the function to render the same result. Talk with your peers to compare the two functions side by side to see if you understand what's happening.
https://codepen.io/pen/?editors=0010#0
