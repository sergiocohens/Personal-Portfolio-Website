import React from 'react'
import { Button } from 'react-bootstrap'
import useSound from 'use-sound'
import hihat from '../../assets/hihat.mp3'

function HiHat() {
    const [play] = useSound(hihat)

    return (
        <Button onClick={play} style={{width:'120px', height:'120px', margin:'5px'}} variant='theme'>HIHAT</Button>
    )
}

export default HiHat