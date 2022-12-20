import TypeWriterEffect from 'react-typewriter-effect'

function TypeWritterEffect() {
  return (
    <TypeWriterEffect
      textStyle={{
        color: '#fff',
        // fontWeight: 500,
        fontSize: '1.1em',
      }}
      startDelay={1000}
      cursorColor="#3F3D56"
      multiText={[
        'Fullstack web Developer',
        'Web designer',
        'Frontend Developer',
      ]}
      multiTextLoop={true}
      multiTextDelay={1000}
      typeSpeed={30}
    />
  )
}

export default TypeWritterEffect
