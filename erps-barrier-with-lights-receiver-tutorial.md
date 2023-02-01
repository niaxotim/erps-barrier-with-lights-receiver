### @activities true
### @explicitHints true

# ERPS STEM WEEK :: Barrier - Radio Control & Lights

## Introduction
### Introduction Step @unplugged
We are going to synchronise a traffic light with a barrier over the radio, so that we see a red light when the barrier
is down, and a green one when it is up!

Hopefully you've already got your barrier code working, so let's code our lights!

![Barrier with lights](https://raw.githubusercontent.com/niaxotim/erps-barrier-with-lights-receiver/master/assets/traffic_lights_radio.png)

## Setting up our radio and lights
### Step 1
Our BBC micro:bit has an in-built radio transmitter. This transmitter works on different 'channels'.  

We have to set which channel we want to use to transmit, and then listen on the same channel when we receive.  

Let's set our radio channel using a ``||radio:radio set group||`` block - make sure you set it to the channel assigned to you!  

#### ~ tutorialhint
```blocks
radio.setGroup(255)
```

### Step 2
Now let's add in some code so that the lights show red when we start. This matches the start state of our barrier being down!  
Add a ``||Kitronik_STOPbit.Make Traffic Light state||`` block after ``||radio:set group||`` and set it to ``||Kitronik_STOPbit.Stop||``.

#### ~ tutorialhint
```blocks
radio.setGroup(155)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
```

## Changing the lights
### Step 3
We now need to be able to write the code to receive our radio commands. From the ``||radio:Radio||`` category, drag in the ``||radio:on radio receivedString||`` block - this will have a text input within the block.

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
})
```

### Step 5
Within the ``||radio:on radio receivedString||`` block, we need to check the received message is what we are expecting. If the message is something we know about we can handle it - we call the code that does something a handler.  
  
Add an ``||logic:if||`` block inside the block and check the received message is "up". Place an ``||logic:" " = " "||`` compare block into the ``||logic:if||`` statement. From the ``||radio:on radio receivedString||``, drag ``||variables:receivedString||`` into the first text section, and then type "up" into the comparison text box.  

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
    	
    }
})
```

### Step 6
Drag a ``||Kitronik_STOPbit.Make Traffic Light state||`` block in to the if-statement, and set it to ``||Kitronik_STOPbit.Go||``.

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
    	Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    }
})
```


### Step 6
We now need to check when we receive a "down" command on our radio. Click on the '+' in your if-statement twice.
This will give you an 'else-if' and an 'else' statement. Click on the '-' to remove the 'else' part.  

Now duplicate your ``||logic:" " = " "||`` block, but change the right-hand-side to say "down".  

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    } else if (receivedString == "down") {
    }
})
```

### Step 7
Duplicate your ``||logic:" " = " "||`` block, but change the right-hand-side to say "down".  
  
Drag a ``||Kitronik_STOPbit.Make Traffic Light state||`` block in to the if-statement, and set it to ``||Kitronik_STOPbit.Stop||``.


#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    } else if (receivedString == "down") {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    }
})
```

### Step 8
Connect your BBC micro:bit and click ``|Download|`` to transfer your code.  
  
When your micro:bit powers up, does the light initially set itself to red only?  

What happens when you press the buttons to control your barrier? Do the lights responds as you expect?
  

### Barrier Basic Tutorial Complete @unplugged
Great work! You're barrier is now synchronised with your lights!
![Great job](https://raw.githubusercontent.com/niaxotim/erps-barrier-with-lights-receiver/master/assets/great_job.png)
