"use client"
import  { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] =  useState('');
  const router = useRouter();
  const handleSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}`);
  };
  return (
    <form data-new-gr-c-s-check-loaded data-gr-ext-install
      className='w-50 flex justify-center md:justify-between'
      onSubmit={handleSumit}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-white p-2 w-80 text-xl rounded-xl'
        placeholder='Search'
        type='text'
      />
      <button className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>
				&#128640;
      </button>
    </form>
  );
}
