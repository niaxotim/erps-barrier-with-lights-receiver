radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    } else if (receivedString == "down") {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    }
})
radio.setGroup(255)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
