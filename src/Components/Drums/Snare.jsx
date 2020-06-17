import React from 'react'
import { Button } from 'react-bootstrap'
import useSound from 'use-sound'
import snare from '../../assets/snare.mp3'

function Snare() {
    const [play] = useSound(snare)

    return (
        <Button onClick={play} style={{width:'120px', height:'120px', margin:'5px'}} variant='theme'>SNARE</Button>
    )
}

export default Snare