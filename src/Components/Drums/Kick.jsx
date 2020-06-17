import React from 'react'
import { Button } from 'react-bootstrap'
import useSound from 'use-sound'
import kick from '../../assets/kick.mp3'

function Kick() {
    const [play] = useSound(kick)

    return (
        <Button onClick={play} style={{width:'120px', height:'120px', margin:'5px'}} variant='theme'>KICK</Button>
    )
}

export default Kick