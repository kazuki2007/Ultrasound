let 状態 = 0
input.onButtonPressed(Button.A, function () {
    状態 = 0
})
input.onButtonPressed(Button.B, function () {
    状態 = 1
})
basic.forever(function () {
    if (状態 == 0) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 20) {
            if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 5) {
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
                basic.pause(100)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            } else {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . # . .
                    `)
                maqueen.motorStop(maqueen.Motors.All)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
                basic.pause(100)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            }
        } else {
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        }
    } else {
        basic.showLeds(`
            # # . # #
            . . . . .
            # . # . #
            . . . . .
            # # . # #
            `)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
