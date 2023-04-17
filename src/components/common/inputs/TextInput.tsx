import React from 'react'

interface TextInputProps {
  id: string
  onChange: any
  value: string
  label: string
  type?: string
  autoComplete?: string
}

const TextInput: React.FC<TextInputProps> = ({ id, onChange, value, label, type, autoComplete }) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className="
          text-md
          peer
          block
          w-full
          appearance-none
          rounded-md
          bg-neutral-700
          px-6
          pb-1
          pt-6
          text-white
          focus:outline-none
          focus:ring-0
        "
        placeholder=" "
        autoComplete={autoComplete}
      />
      <label
        className="
          text-md
          absolute
          left-6  
          top-4
          z-10
          origin-[0]
          -translate-y-3
          scale-75
          transform
          text-zinc-400
          duration-150
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-3
          peer-focus:scale-75
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default TextInput
