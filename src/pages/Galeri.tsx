import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      title: "Kajian Rutin",
      category: "Kajian",
      description: "Suasana kajian rutin ROHIS dengan ustadz tamu",
    },
    {
      id: 2,
      title: "Pesantren Ramadhan",
      category: "Hari Besar",
      description: "Kegiatan pesantren kilat di bulan Ramadhan",
    },
    {
      id: 3,
      title: "Bakti Sosial",
      category: "Sosial",
      description: "Kegiatan sosial memberikan bantuan kepada masyarakat",
    },
    {
      id: 4,
      title: "Mentoring",
      category: "Pembinaan",
      description: "Sesi mentoring kelompok dengan mentor",
    },
    {
      id: 5,
      title: "Lomba Tahfidz",
      category: "Kompetisi",
      description: "Kompetisi menghafal Al-Quran antar siswa",
    },
    {
      id: 6,
      title: "Peringatan Maulid",
      category: "Hari Besar",
      description: "Perayaan Maulid Nabi Muhammad SAW",
    },
    {
      id: 7,
      title: "Dhuha Bersama",
      category: "Ibadah",
      description: "Sholat Dhuha berjamaah di masjid sekolah",
    },
    {
      id: 8,
      title: "Halaqah",
      category: "Kajian",
      description: "Kegiatan halaqah untuk pembahasan topik khusus",
    },
    {
      id: 9,
      title: "Santunan Yatim",
      category: "Sosial",
      description: "Memberikan santunan kepada anak yatim",
    },
  ];

  const categories = ["Semua", "Kajian", "Hari Besar", "Sosial", "Pembinaan", "Kompetisi", "Ibadah"];
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPhotos = activeCategory === "Semua"
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galeri Kegiatan</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Dokumentasi berbagai kegiatan dan momen berharga ROHIS SMKN 29 Jakarta
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 animate-fade-in">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 transition-all duration-300 hover:scale-105"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <Card
                key={photo.id}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(photo.id)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <span className="text-3xl">📷</span>
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        Klik untuk melihat
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">{photo.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Tidak ada foto dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-6xl">📷</span>
                  </div>
                  <p className="text-muted-foreground">
                    {photos.find(p => p.id === selectedImage)?.title}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {photos.find(p => p.id === selectedImage)?.title}
                </h3>
                <p className="text-muted-foreground">
                  {photos.find(p => p.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-lg text-center animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Dokumentasi Kegiatan
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Semua kegiatan ROHIS didokumentasikan dengan baik untuk menjadi kenangan dan inspirasi bagi generasi selanjutnya. Foto-foto asli dapat dilihat di media sosial resmi kami atau menghubungi pengurus ROHIS.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Galeri;
