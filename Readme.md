# Simon Says

<img src = data:image/jpeg;base64,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>


## Game Description

    The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order. It's fast-paced play, with lights and sounds that can challenge you.

## How To Play

    Begin by selecting a difficulty, Beginner equals 5 correct choices, Intermediate equals 10 correct choices and Hard equals 20 correct choices. You must wait until after the computer goes for your answer to count. If you choose the wrong answer you will loose and the game will restart.


#### Languages
HTML, CSS, JavaScript