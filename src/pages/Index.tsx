
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Index = () => {
  return (
    <div className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="flex-1 text-center md:text-left w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Sofre com dores no joanete? 
              <span className="text-teal-600 block mt-2">
                Corrija sem cirurgias com conforto e segurança!
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              Solução natural e comprovada para aliviar as dores e corrigir joanetes sem procedimentos invasivos.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-base sm:text-lg"
                onClick={() => window.location.href = 'https://pay.cakto.com.br/386udms_340566'}
              >
                Quero corrigir meu joanete agora! <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md mx-auto">
            <div className="relative aspect-square">
              <img
                src="/lovable-uploads/525d92e8-d486-4638-a6bc-b891322e64f8.png"
                alt="Antes e depois do corretor de joanete"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
