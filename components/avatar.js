/* Leftover from Example Project */
import Image from 'next/image'

export default function Avatar({ name, picture, jobTitle }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
      <div className="ml-4 text-xl">{jobTitle}</div>
    </div>
  )
}
