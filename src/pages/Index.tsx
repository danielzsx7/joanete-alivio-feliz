
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Shield, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Existing Code */}
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

      {/* Benefícios Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Por que nosso corretor de joanete é diferente?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Check className="mx-auto mb-4 text-teal-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Solução Natural</h3>
              <p className="text-gray-600">Método sem cirurgias ou procedimentos invasivos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="mx-auto mb-4 text-teal-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Segurança Comprovada</h3>
              <p className="text-gray-600">Desenvolvido com acompanhamento médico especializado.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Star className="mx-auto mb-4 text-teal-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Resultados Garantidos</h3>
              <p className="text-gray-600">Melhora significativa em curto prazo de uso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            O que nossos clientes dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4 text-gray-700">"Depois de anos de dor, finalmente encontrei uma solução sem cirurgia. Meu joanete melhorou muito!"</p>
              <div className="font-semibold text-gray-900">- Maria Silva</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4 text-gray-700">"Incrível como um produto pode fazer tanta diferença. Recomendo para todos que sofrem com joanetes."</p>
              <div className="font-semibold text-gray-900">- João Oliveira</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4 text-gray-700">"Praticidade e eficiência. Agora consigo usar meus sapatos sem dor. Muito obrigado!"</p>
              <div className="font-semibold text-gray-900">- Ana Souza</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Não deixe a dor limitar sua vida
          </h2>
          <p className="text-xl mb-8">
            Corrija seu joanete agora e recupere seu bem-estar!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-gray-100"
            onClick={() => window.location.href = 'https://pay.cakto.com.br/386udms_340566'}
          >
            Quero meu corretor de joanete! <ShoppingCart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
