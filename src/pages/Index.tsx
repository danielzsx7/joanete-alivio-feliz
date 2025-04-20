
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Shield, Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CreditCard, ShieldCheck, Truck, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="flex-1 text-center md:text-left w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Sofre com dores no joanete?
                <span className="text-teal-600 block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  Corrija sem cirurgias com conforto e segurança!
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 max-w-xl mx-auto md:mx-0">
                Solução natural e comprovada para aliviar as dores e corrigir joanetes sem procedimentos invasivos.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-sm sm:text-base w-full sm:w-auto"
                  onClick={() => window.location.href = 'https://entrega.logzz.com.br/pay/mem766ngz/ahcny-1-unidade-promo'}
                >
                  Quero corrigir meu joanete agora! <ShoppingCart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[280px] sm:max-w-md mx-auto mt-6 md:mt-0">
              <div className="relative aspect-square">
                <img
                  src="/lovable-uploads/cebe0718-2cc2-4cdf-9e66-0795ac3cb8e6.png"
                  alt="Antes e depois do corretor de joanete"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefícios Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Por que nosso corretor de joanete é diferente?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Check className="mx-auto mb-4 text-teal-600 h-8 w-8 sm:h-12 sm:w-12" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Solução Natural</h3>
              <p className="text-sm sm:text-base text-gray-600">Método sem cirurgias ou procedimentos invasivos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="mx-auto mb-4 text-teal-600 h-8 w-8 sm:h-12 sm:w-12" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Segurança Comprovada</h3>
              <p className="text-sm sm:text-base text-gray-600">Desenvolvido com acompanhamento médico especializado.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Star className="mx-auto mb-4 text-teal-600 h-8 w-8 sm:h-12 sm:w-12" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Resultados Garantidos</h3>
              <p className="text-sm sm:text-base text-gray-600">Melhora significativa em curto prazo de uso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/0dc23d23-4f67-4cd3-be4f-b0cd41b18b37.png"
                  alt="Antes e depois - Ana Souza"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="italic mb-4 text-sm sm:text-base text-gray-700">"Depois de anos de dor, finalmente encontrei uma solução sem cirurgia. Meu joanete melhorou muito!"</p>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">- Ana Souza, 47 anos - SP</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/d91e76d0-61bd-4e20-a2f9-ad68fc86ac5e.png"
                  alt="Antes e depois - Júlia Ribeiro"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="italic mb-4 text-sm sm:text-base text-gray-700">"Incrível como um produto pode fazer tanta diferença. Recomendo para todos que sofrem com joanetes."</p>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">- Júlia Ribeiro, 32 anos - Rio de Janeiro</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/34698b4e-37cc-4a05-8c21-b5fb2a983f02.png"
                  alt="Antes e depois - Marcos Alves"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="italic mb-4 text-sm sm:text-base text-gray-700">"Praticidade e eficiência. Agora consigo usar meus sapatos sem dor. Muito obrigado!"</p>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">- Marcos Alves, 45 anos - SP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <AspectRatio ratio={16/12} className="bg-white rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/406210b8-f2c6-4e01-9f6c-6ab3a17f177f.png"
                  alt="Corretor Protetor Ortopédico Para Joanete"
                  className="object-contain w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Corretor Protetor Ortopédico Para Joanete Calos Tira Dor
              </h3>
              <p className="text-sm sm:text-base">
                O Protetor Ortopédico é perfeito após aquele dia cansativo de aperto nos pés. 
                Esse dispositivo ortopédico é extremamente confortável e relaxante ajudando a aliviar as dores causada pela Joanete. 
                Utilizar o protetor evita dores, inchaço e desconforto, você ajusta a pressão do dispositivo de forma simples e prática. 
                Pode ser usado no pé esquerdo ou direito.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Especificações Técnicas:</h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>- Modelo: Protetor Para Joanete Articulado</li>
                  <li>- Material: Espuma, Velcro e Plástico</li>
                  <li>- Cor: Branco</li>
                  <li>- Tamanho: Único</li>
                  <li>- Dimensões Aprox.: 14cm (Comprimento) X 4cm (Altura) X Largura Ajustável</li>
                  <li>- Peso: 25g</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="bg-teal-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Não deixe a dor limitar sua vida
          </h2>
          <div className="mb-6">
            <p className="text-lg mb-2">De <span className="line-through">R$ 129,99</span> por apenas:</p>
            <p className="text-4xl sm:text-5xl font-bold mb-4">R$ 99,99</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/10 rounded-lg p-3">
                <CreditCard className="h-5 w-5" />
                <span className="text-sm">Pague somente na entrega</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 rounded-lg p-3">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm">10 dias de garantia</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 rounded-lg p-3">
                <Truck className="h-5 w-5" />
                <span className="text-sm">Frete grátis</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 rounded-lg p-3">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm">Compra 100% segura</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 rounded-lg p-3">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Receba em 24 horas</span>
              </div>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-gray-100 text-sm sm:text-base w-full sm:w-auto"
            onClick={() => window.location.href = 'https://entrega.logzz.com.br/pay/mem766ngz/ahcny-1-unidade-promo'}
          >
            Quero meu corretor de joanete! <ShoppingCart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
