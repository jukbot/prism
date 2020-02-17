import { memo, useContext } from 'react'

import { Metadata } from 'components/atoms/metadataProvider'

import { updateTrack, getNextTrack } from 'libs/track'

import './skip.styl'

const Skip = memo(() => (
    <button id="skip-track-button" onClick={() => updateTrack(getNextTrack())}>
        <svg
            id="skip-track"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
        >
            <path
                className="fill"
                fill={
                    useContext(Metadata).isLight
                        ? 'var(--dark-text)'
                        : 'var(--light-text)'
                }
                d="M7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"
            />
        </svg>
    </button>
))

export default Skip
