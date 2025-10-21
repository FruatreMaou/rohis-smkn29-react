import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, BookOpen } from "lucide-react";

const Profil = () => {
  const values = [
    {
      icon: Heart,
      title: "Akhlak Mulia",
      description: "Membentuk karakter muslim yang berakhlak baik sesuai dengan ajaran Islam",
    },
    {
      icon: BookOpen,
      title: "Ilmu Pengetahuan",
      description: "Mendorong anggota untuk terus belajar dan mendalami ilmu agama",
    },
    {
      icon: Users,
      title: "Ukhuwah Islamiyah",
      description: "Membangun persaudaraan dan kebersamaan dalam kebaikan",
    },
    {
      icon: Target,
      title: "Prestasi",
      description: "Mendorong anggota untuk berprestasi dalam bidang akademik dan non-akademik",
    },
  ];

  const structure = [
    { position: "Ketua Umum", name: "Ahmad Fauzi" },
    { position: "Wakil Ketua", name: "Siti Nurhaliza" },
    { position: "Sekretaris", name: "Muhammad Ridwan" },
    { position: "Bendahara", name: "Fatimah Zahra" },
    { position: "Koordinator Kajian", name: "Abdul Rahman" },
    { position: "Koordinator Mentoring", name: "Aisyah Putri" },
    { position: "Kepala Bidang PSDM", name: "Rizki Ramadhan" },
    { position: "Kepala Bidang Humas", name: "Dewi Safitri" },
    { position: "Kepala Bidang DKK", name: "Arif Budiman" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Profil ROHIS</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Organisasi Rohani Islam SMKN 29 Jakarta adalah wadah bagi siswa-siswi untuk mengembangkan spiritualitas dan karakter Islami
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Tentang Kami</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ROHIS SMKN 29 Jakarta adalah organisasi siswa yang fokus pada pengembangan nilai-nilai keislaman di lingkungan sekolah. Kami hadir sebagai wadah bagi siswa-siswi yang ingin memperdalam ilmu agama dan mengamalkannya dalam kehidupan sehari-hari.
                </p>
                <p>
                  Dengan berbagai program dan kegiatan yang terstruktur, kami berkomitmen untuk menciptakan lingkungan sekolah yang religius dan kondusif untuk pembelajaran. Setiap anggota didorong untuk aktif berpartisipasi dan berkontribusi dalam berbagai kegiatan keislaman.
                </p>
                <p>
                  ROHIS telah berdiri sejak tahun 2010 dan terus berkembang hingga saat ini. Kami bangga menjadi bagian dari komunitas siswa yang peduli terhadap perkembangan spiritualitas dan akhlak di SMKN 29 Jakarta.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Struktur Organisasi
            </h2>
            <Card className="shadow-lg animate-scale-in">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {structure.map((member, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <p className="text-sm text-secondary font-semibold mb-1">{member.position}</p>
                      <p className="text-lg font-bold text-foreground">{member.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg animate-slide-in-left">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Visi</h3>
                  <p className="text-foreground leading-relaxed">
                    Menjadi wadah pembinaan rohani Islam yang membentuk generasi muslim yang beriman, berilmu, berakhlak mulia, dan berprestasi di SMKN 29 Jakarta.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg animate-slide-in-right">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Misi</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span>Menyelenggarakan kajian Islam berkualitas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span>Membina karakter Islami siswa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span>Mengembangkan potensi siswa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span>Membangun ukhuwah Islamiyah</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profil;
