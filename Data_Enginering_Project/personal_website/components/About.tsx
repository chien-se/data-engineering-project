export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-spirit-900 mb-12">My Story</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Journey Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-spirit-600 mb-6">
              The Journey
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-gold mt-1.5"></div>
                  <div className="w-0.5 h-24 bg-spirit-200"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-spirit-900">Started Learning</h4>
                  <p className="text-gray-600 text-sm">
                    Began my programming journey with a passion for solving problems
                    and building meaningful solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-gold mt-1.5"></div>
                  <div className="w-0.5 h-24 bg-spirit-200"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-spirit-900">Built First Projects</h4>
                  <p className="text-gray-600 text-sm">
                    Created multiple full-stack applications, learning through
                    hands-on experience and continuous iteration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-gold mt-1.5"></div>
                  <div className="w-0.5 h-24 bg-spirit-200"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-spirit-900">Professional Growth</h4>
                  <p className="text-gray-600 text-sm">
                    Applied my skills in production environments, collaborated with
                    teams, and deepened my technical expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-gold"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-spirit-900">Always Learning</h4>
                  <p className="text-gray-600 text-sm">
                    Continuing to push boundaries, tackle new challenges, and grow
                    as an engineer with an unyielding spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div>
            <h3 className="text-2xl font-semibold text-spirit-600 mb-6">
              My Philosophy
            </h3>
            <div className="space-y-6">
              <div className="card border-l-4 border-accent-gold">
                <h4 className="font-semibold text-spirit-900 mb-2">Persistence</h4>
                <p className="text-gray-600">
                  Every bug is a puzzle, every challenge is an opportunity. I
                  believe in pushing through obstacles with determination and
                  resourcefulness.
                </p>
              </div>

              <div className="card border-l-4 border-accent-gold">
                <h4 className="font-semibold text-spirit-900 mb-2">Continuous Learning</h4>
                <p className="text-gray-600">
                  The tech world evolves constantly. I stay ahead by reading,
                  building, and experimenting with new technologies and paradigms.
                </p>
              </div>

              <div className="card border-l-4 border-accent-gold">
                <h4 className="font-semibold text-spirit-900 mb-2">Quality Matters</h4>
                <p className="text-gray-600">
                  I write clean, maintainable code. I believe in testing,
                  documentation, and building solutions that last.
                </p>
              </div>

              <div className="card border-l-4 border-accent-gold">
                <h4 className="font-semibold text-spirit-900 mb-2">Impact</h4>
                <p className="text-gray-600">
                  I care deeply about creating solutions that solve real problems
                  and provide value to users and teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
