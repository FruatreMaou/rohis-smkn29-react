import { BookOpen, Users, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Beranda = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Kajian Rutin",
      description: "Kajian Islam setiap minggu untuk meningkatkan pemahaman agama",
    },
    {
      icon: Users,
      title: "Mentoring",
      description: "Program bimbingan keislaman untuk seluruh siswa",
    },
    {
      icon: Calendar,
      title: "Peringatan Hari Besar",
      description: "Memperingati hari besar Islam dengan berbagai kegiatan",
    },
    {
      icon: Award,
      title: "Kompetisi",
      description: "Lomba-lomba Islami untuk mengasah kemampuan siswa",
    },
  ];

  const stats = [
    { number: "200+", label: "Anggota Aktif" },
    { number: "50+", label: "Kegiatan/Tahun" },
    { number: "15+", label: "Pengurus Inti" },
    { number: "10+", label: "Tahun Berdiri" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rohani Islam SMKN 29 Jakarta
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Membangun generasi muslim yang berakhlak mulia, berprestasi, dan berkontribusi positif untuk umat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link to="/profil">Tentang Kami</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/kegiatan">Lihat Kegiatan</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Program & Kegiatan Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berbagai program dan kegiatan untuk meningkatkan spiritualitas dan keterampilan siswa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <activity.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl animate-scale-in">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Visi & Misi
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">Visi</h3>
                    <p className="text-foreground leading-relaxed">
                      Menjadi wadah pembinaan rohani Islam yang membentuk generasi muslim yang beriman, berilmu, dan berakhlak mulia.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/5 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">Misi</h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        <span>Menyelenggarakan kajian dan pembelajaran Islam yang berkualitas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        <span>Membina karakter Islami dalam kehidupan sehari-hari</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        <span>Mengembangkan potensi siswa melalui berbagai kegiatan positif</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        <span>Membangun ukhuwah Islamiyah yang kuat antar anggota</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Bergabung Bersama Kami
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in-up">
            Mari bersama-sama membangun generasi muslim yang unggul dan berakhlak mulia
          </p>
          <Button size="lg" variant="secondary" asChild className="animate-scale-in">
            <Link to="/kontak">Hubungi Kami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
