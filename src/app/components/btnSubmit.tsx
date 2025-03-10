'use client';
import clsx from 'clsx';
import React from 'react'

interface btnSubmitProps extends Partial <React.ReactHTMLElement<HTMLButtonElement>> {
    isDisabled: boolean;
    children: React.ReactNode
}

export default function btnSubmit({isDisabled, children }: btnSubmitProps) {
  return (
    <button type='submit' className={clsx('w-max pl-[15] pr-[15] pb-[5] pt-[5] text-center text-base font-medium rounded cursor-pointer ml-auto mr-auto' ,
        isDisabled && 'bg-gray-300 text-gray-950',
        !isDisabled && ' bg-green-700 text-white  hover:bg-green-900 focus:bg-green-900'
    )
    }>{children}</button>
  )
}
