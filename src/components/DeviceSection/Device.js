import React from 'react'

const Device = ({ dark, image, device }) => {
  const primaryColor = dark ? '#43445B' : '#FFFFFF'
  const secondaryColor = dark ? '#525478' : '#E0E0E0'
  const tertiaryColor = dark ? '#43445B' : '#F9F9F9'

  return (
    <svg width="298" height="602">
      <defs>
        <rect id="a" width="6" height="25" y="76" rx="3" />
        <rect id="b" width="6" height="44" y="129" rx="3" />
        <rect id="c" width="6" height="44" y="184" rx="3" />
        <rect id="d" width="6" height="44" x="292" y="129" rx="3" />
        <rect id="e" width="292" height="602" x="3" rx="40" />
        <rect id="f" width="45" height="45" x="127" y="540" rx="22.5" />
        <circle id="g" cx="150" cy="19" r="4" />
        <circle id="h" cx="103" cy="38" r="5" />
        <rect id="i" width="47" height="6" x="126" y="35" rx="3" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill={primaryColor} xlinkHref="#a" />
        <rect
          width="5"
          height="24"
          x="0.5"
          y="76.5"
          stroke={secondaryColor}
          rx="2.5"
        />
        <use fill={primaryColor} xlinkHref="#b" />
        <rect
          width="5"
          height="43"
          x="0.5"
          y="129.5"
          stroke={secondaryColor}
          rx="2.5"
        />
        <use fill={primaryColor} xlinkHref="#c" />
        <rect
          width="5"
          height="43"
          x="0.5"
          y="184.5"
          stroke={secondaryColor}
          rx="2.5"
        />
        <use fill={primaryColor} xlinkHref="#d" />
        <rect
          width="5"
          height="43"
          x="292.5"
          y="129.5"
          stroke={secondaryColor}
          rx="2.5"
        />
        <use fill={primaryColor} xlinkHref="#e" />
        <rect
          width="291"
          height="601"
          x="3.5"
          y="0.5"
          stroke={secondaryColor}
          rx="40"
        />
        <use fill={tertiaryColor} xlinkHref="#f" />
        <rect
          width="44"
          height="44"
          x="127.5"
          y="540.5"
          stroke={secondaryColor}
          rx="22"
        />
        <use fill={secondaryColor} xlinkHref="#g" />
        <circle cx="150" cy="19" r="3.5" stroke={tertiaryColor} />
        <use fill={secondaryColor} xlinkHref="#h" />
        <circle cx="103" cy="38" r="4.5" stroke={tertiaryColor} />
        <use fill={secondaryColor} xlinkHref="#i" />
        <rect
          width="46"
          height="5"
          x="126.5"
          y="35.5"
          stroke={tertiaryColor}
          rx="2.5"
        />
        <foreignObject width="260" height="462" x="19" y="57">
          <div className="Device" style={{ height: '462px' }}>
            <img className="Device-img" src={image} />
          </div>
        </foreignObject>
        <rect
          width="262"
          height="464"
          x="18"
          y="56"
          stroke={secondaryColor}
          strokeWidth="2"
          rx="3"
        />
      </g>
    </svg>
  )
}

export default Device
