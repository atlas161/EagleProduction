
import React, { useState, useEffect } from 'react';
import { Instagram, Heart, MessageCircle, Play, X, ExternalLink, Image as ImageIcon, Loader } from 'lucide-react';
import { Reveal } from './Reveal';

// --- CONFIGURATION ---
// 1. Allez sur https://behold.so/
// 2. Connectez le compte Instagram
// 3. Créez un feed de type "JSON"
// 4. Collez l'URL fournie ici entre les guillemets :
const INSTAGRAM_FEED_JSON_URL = ""; 

// Interface interne pour notre composant
interface InstaMedia {
  id: string;
  type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  caption: string;
  permalink: string;
  like_count?: number; // Les API publiques ne donnent pas toujours les likes exacts
  comments_count?: number;
}

// Données de secours (Fallback) si l'API n'est pas connectée ou échoue
const FALLBACK_FEED: InstaMedia[] = [
  {
    id: '1',
    type: 'VIDEO',
    media_url: 'https://cdn.coverr.co/videos/coverr-drone-shot-of-a-lighthouse-5227/1080p.mp4',
    thumbnail_url: 'https://picsum.photos/800/800?random=20',
    caption: 'Inspection de structure maritime. La précision avant tout. #inspection #drone #offshore',
    permalink: 'https://instagram.com',
    like_count: 124,
    comments_count: 12
  },
  {
    id: '2',
    type: 'IMAGE',
    media_url: 'https://picsum.photos/800/800?random=21',
    caption: 'Suivi de chantier BTP - Phase 3. #btp #construction #suividechantier',
    permalink: 'https://instagram.com',
    like_count: 89,
    comments_count: 4
  },
  {
    id: '3',
    type: 'IMAGE',
    media_url: 'https://picsum.photos/800/800?random=22',
    caption: 'Golden hour sur les vignobles du Bordelais. 🍇 #wine #bordeaux #dronephotography',
    permalink: 'https://instagram.com',
    like_count: 245,
    comments_count: 32
  },
  {
    id: '4',
    type: 'VIDEO',
    media_url: 'https://cdn.coverr.co/videos/coverr-flying-over-a-large-forest-4636/1080p.mp4',
    thumbnail_url: 'https://picsum.photos/800/800?random=23',
    caption: 'Immersion totale en forêt. Nos drones passent partout. #nature #fpv #cinematic',
    permalink: 'https://instagram.com',
    like_count: 156,
    comments_count: 8
  },
  {
    id: '5',
    type: 'IMAGE',
    media_url: 'https://picsum.photos/800/800?random=24',
    caption: 'Immobilier de luxe : Mettez en valeur vos biens d\'exception.',
    permalink: 'https://instagram.com',
    like_count: 92,
    comments_count: 5
  },
  {
    id: '6',
    type: 'IMAGE',
    media_url: 'https://picsum.photos/800/800?random=25',
    caption: 'Photogrammétrie : Relevé topographique haute précision.',
    permalink: 'https://instagram.com',
    like_count: 67,
    comments_count: 2
  },
  {
    id: '7',
    type: 'VIDEO',
    media_url: 'https://cdn.coverr.co/videos/coverr-driving-on-a-road-between-snowy-mountains-4509/1080p.mp4',
    thumbnail_url: 'https://picsum.photos/800/800?random=26',
    caption: 'Tournage publicitaire automobile en montagne. Conditions extrêmes, images parfaites.',
    permalink: 'https://instagram.com',
    like_count: 310,
    comments_count: 45
  },
  {
    id: '8',
    type: 'IMAGE',
    media_url: 'https://picsum.photos/800/800?random=27',
    caption: 'Événementiel : Le festival vu du ciel. #event #festival #crowd',
    permalink: 'https://instagram.com',
    like_count: 180,
    comments_count: 15
  },
   {
    id: '9',
    type: 'IMAGE',
    media_url: 'https://picsum.photos/800/800?random=28',
    caption: 'Architecture moderne. Lignes et perspectives.',
    permalink: 'https://instagram.com',
    like_count: 112,
    comments_count: 9
  }
];

export const Gallery: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [feedData, setFeedData] = useState<InstaMedia[]>(FALLBACK_FEED);
  const [selectedMedia, setSelectedMedia] = useState<InstaMedia | null>(null);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [isUsingFallback, setIsUsingFallback] = useState(true);

  // Fonction pour charger les vraies données
  useEffect(() => {
    const fetchInstagramFeed = async () => {
      if (!INSTAGRAM_FEED_JSON_URL) return;

      setIsLoadingFeed(true);
      try {
        const response = await fetch(INSTAGRAM_FEED_JSON_URL);
        if (!response.ok) throw new Error('Failed to fetch feed');
        
        const data = await response.json();
        
        // Mapping des données brutes vers notre format (adapté pour Behold.so ou similaire)
        const formattedData: InstaMedia[] = data.map((item: any) => ({
          id: item.id,
          type: item.media_type === 'VIDEO' ? 'VIDEO' : 'IMAGE',
          // Behold renvoie souvent media_url pour l'image et children pour les albums
          media_url: item.media_url || item.thumbnail_url,
          thumbnail_url: item.thumbnail_url || item.media_url,
          caption: item.caption || '',
          permalink: item.permalink,
          like_count: item.like_count || Math.floor(Math.random() * 100) + 50, // Mock si non fourni
          comments_count: item.comments_count || Math.floor(Math.random() * 20)
        }));

        setFeedData(formattedData);
        setIsUsingFallback(false);
      } catch (error) {
        console.warn("Erreur chargement Instagram, utilisation du fallback", error);
        // On reste sur le FALLBACK_FEED par défaut
      } finally {
        setIsLoadingFeed(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  const handleLoadMore = () => {
    setItemsToShow(prev => Math.min(prev + 3, feedData.length));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* En-tête de section */}
      <div className="text-center mb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-accent border border-accent/20 bg-accent/5 px-4 py-2 rounded-full mb-4 hover:bg-accent/10 transition-colors cursor-pointer" onClick={() => window.open('https://instagram.com/eagleproduction.video', '_blank')}>
            <Instagram size={18} />
            <span className="text-sm font-semibold tracking-wide">@eagleproduction.video</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Le feed.</h2>
          <p className="text-textSecondary text-xl max-w-2xl mx-auto">
            {isLoadingFeed 
              ? "Actualisation du flux en cours..." 
              : "Nos dernières réalisations et coulisses de tournage en temps réel."}
          </p>
        </Reveal>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
        {feedData.slice(0, itemsToShow).map((media, index) => (
          <Reveal key={media.id} delay={index * 100}>
            <div 
              className="group relative aspect-square bg-surfaceHighlight overflow-hidden md:rounded-xl cursor-pointer"
              onClick={() => setSelectedMedia(media)}
            >
              {/* Media Content */}
              {media.type === 'VIDEO' ? (
                <>
                  <img 
                    src={media.thumbnail_url || media.media_url} 
                    alt={media.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <Play size={16} className="text-white fill-white" />
                  </div>
                </>
              ) : (
                <img 
                  src={media.media_url} 
                  alt={media.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                 <div className="flex gap-6 text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 font-bold">
                        <Heart className="fill-white" size={20} />
                        {media.like_count}
                    </div>
                    <div className="flex items-center gap-2 font-bold">
                        <MessageCircle className="fill-white" size={20} />
                        {media.comments_count}
                    </div>
                 </div>
                 <p className="text-white/80 text-sm line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {media.caption}
                 </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bouton Charger Plus */}
      {itemsToShow < feedData.length && (
        <div className="mt-12 text-center">
            <button 
                onClick={handleLoadMore}
                className="bg-surfaceHighlight border border-white/10 text-white px-8 py-3 rounded-full hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 font-medium"
            >
                Charger plus de contenu
            </button>
        </div>
      )}

      {/* Lightbox / Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedMedia(null)}>
            <button 
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedMedia(null)}
            >
                <X size={40} />
            </button>

            <div 
                className="max-w-5xl w-full max-h-[90vh] bg-surface rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Media Container */}
                <div className="flex-1 bg-black flex items-center justify-center relative min-h-[400px]">
                    {selectedMedia.type === 'VIDEO' ? (
                        <video 
                            src={selectedMedia.media_url} 
                            controls 
                            autoPlay 
                            className="w-full h-full max-h-[80vh] object-contain"
                        />
                    ) : (
                        <img 
                            src={selectedMedia.media_url} 
                            alt={selectedMedia.caption}
                            className="w-full h-full max-h-[80vh] object-contain"
                        />
                    )}
                </div>

                {/* Sidebar Info */}
                <div className="w-full md:w-[350px] p-6 flex flex-col h-auto md:h-auto border-l border-white/5 bg-surfaceHighlight">
                    
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-red-600 p-[2px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                <ImageIcon size={20} className="text-white" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-sm text-white">eagleproduction.video</div>
                            <div className="text-xs text-textSecondary">Angoulême, France</div>
                        </div>
                        <a href={selectedMedia.permalink} target="_blank" rel="noreferrer" className="ml-auto text-accent text-xs font-bold hover:underline">
                            Voir sur Insta
                        </a>
                    </div>

                    {/* Caption */}
                    <div className="flex-1 overflow-y-auto mb-6 pr-2 custom-scrollbar">
                        <p className="text-sm text-textPrimary leading-relaxed whitespace-pre-line">
                            {selectedMedia.caption || "Pas de description."}
                        </p>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-white/5 space-y-4">
                        <div className="flex justify-between text-white">
                            <div className="flex gap-4">
                                <Heart className="hover:text-red-500 cursor-pointer transition-colors" />
                                <MessageCircle className="hover:text-accent cursor-pointer transition-colors" />
                            </div>
                            <ExternalLink 
                                className="hover:text-accent cursor-pointer transition-colors" 
                                onClick={() => window.open(selectedMedia.permalink, '_blank')}
                            />
                        </div>
                        {selectedMedia.like_count !== undefined && (
                            <div className="font-bold text-sm text-white">
                                {selectedMedia.like_count} J'aime
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
