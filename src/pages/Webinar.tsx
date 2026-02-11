import { Button } from '@/components/ui/button';

const Webinar = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#EAEAEB'}}>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <img 
                  src="https://cdn.poehali.dev/projects/f8116922-d831-47a6-b444-7483fbdc7c3e/bucket/7d7e811f-1ab8-4123-8eb3-70be78965a54.jpg"
                  alt="Эксперт"
                  className="w-full h-auto rounded-lg shadow-xl"
                  style={{
                    mixBlendMode: 'multiply',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#9A1E15] leading-tight">
                Присоединяйтесь к прямому эфиру
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Узнайте практические инструменты для роста продаж и развития бизнеса в 2026 году
              </p>

              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-[#9A1E15] hover:bg-[#7a1711] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://us06web.zoom.us/j/9797722356?pwd=4xvRvE4crlVLGGMLrbWmkJ04zLRfoP.1', '_blank')}
                >
                  Присоединиться к эфиру
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
