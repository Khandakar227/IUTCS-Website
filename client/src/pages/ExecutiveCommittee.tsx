import Committee from '../assets/IUTCSPANEL 4th Year.json';

export default function ExecutiveCommittee() {
  console.log(Committee);
  return (
    <div className="p-4 section">
      <h3 className="text-center font-semibold text-2xl md:text-3xl py-8">Current Executive Committee</h3>
      <p className='pb-12'> We proudly present to you the Student Body of IUTCS Executive Committee 2022-23.
      Each of these individuals brings a unique blend of expertise, passion, and dedication to the table. As we embark on this thrilling odyssey, we extend a warm invitation to you to follow along. 
      Join us on this exciting journey, and stay tuned for updates and insights!
      </p>
      <div className='grid justify-center items-stretch gap-4 committee-wrapper'>
      {
        Committee.map((member, i) => 
        <div key={i + member.Name} className='p-4 shadow rounded-md bg-secondary'>
          <img className='max-w-[300px] w-full mx-auto rounded' src="https://fastly.picsum.photos/id/703/400/400.jpg?hmac=MvsZiC_UDeYrKq2XMt86ixuDp_wMG1zsyrdivBkRnh8" alt={member.Name} />
          <h5 className='text-xl font-medium py-2'>{member.Name}</h5>
          <h6 className='py-1'>{member.Position}</h6>
        </div>
        )
      }
      </div>
    </div>
  )
}
