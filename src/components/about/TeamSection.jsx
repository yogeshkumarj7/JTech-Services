const team = [
  { name: 'Virat Kohli', role: 'CEO' },
  { name: 'AB de Villiers', role: 'Manager' },
  { name: 'Jaddu', role: 'Frontend Developer' }  
];

function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center flex flex-col items-center 
                border border-transparent hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{member.role}</p>

              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mb-4"></div>

              <p className='text-sm text-gray-500 italic'>"A visionary leader who drives success."</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
