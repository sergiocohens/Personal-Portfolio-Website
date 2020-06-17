import React from 'react'
import { Button } from 'react-bootstrap'
import useSound from 'use-sound'
import clap from '../../assets/clap.mp3'

function Clap() {
    const [play] = useSound(clap)

    return (
        <Button onClick={play} style={{width:'120px', height:'120px', margin:'5px'}} variant='theme'>CLAP</Button>
    )
}

export default Clap