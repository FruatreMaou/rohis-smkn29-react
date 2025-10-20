import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

const Kegiatan = () => {
  const activities = [
    {
      title: "Kajian Rutin Mingguan",
      category: "Kajian",
      description: "Kajian Islam setiap hari Jumat setelah sholat Jumat dengan tema yang berbeda setiap minggunya. Menghadirkan ustadz dan pembicara yang kompeten.",
      schedule: "Setiap Jumat",
      time: "13:00 - 14:30",
      location: "Aula Sekolah",
      color: "bg-primary",
    },
    {
      title: "Mentoring Kelompok",
      category: "Pembinaan",
      description: "Program mentoring dalam kelompok kecil untuk membahas berbagai topik keislaman dan sharing pengalaman beribadah.",
      schedule: "Setiap Rabu",
      time: "15:00 - 16:00",
      location: "Ruang Kelas",
      color: "bg-secondary",
    },
    {
      title: "Peringatan Maulid Nabi",
      category: "Hari Besar",
      description: "Perayaan Maulid Nabi Muhammad SAW dengan berbagai kegiatan seperti lomba, santunan, dan pengajian akbar.",
      schedule: "12 Rabiul Awal",
      time: "08:00 - 14:00",
      location: "Lapangan Sekolah",
      color: "bg-accent",
    },
    {
      title: "Pesantren Ramadhan",
      category: "Hari Besar",
      description: "Kegiatan pesantren kilat selama bulan Ramadhan dengan berbagai materi keislaman dan praktik ibadah.",
      schedule: "Bulan Ramadhan",
      time: "07:00 - 12:00",
      location: "Sekolah",
      color: "bg-primary",
    },
    {
      title: "Bakti Sosial",
      category: "Sosial",
      description: "Kegiatan sosial memberikan santunan kepada masyarakat kurang mampu dan anak yatim di sekitar sekolah.",
      schedule: "Setiap 2 Bulan",
      time: "09:00 - 12:00",
      location: "Berbagai Lokasi",
      color: "bg-secondary",
    },
    {
      title: "Lomba Tahfidz",
      category: "Kompetisi",
      description: "Kompetisi menghafal Al-Quran antar siswa untuk memotivasi dalam menghafal dan memahami Al-Quran.",
      schedule: "Semester 2",
      time: "08:00 - 15:00",
      location: "Aula Sekolah",
      color: "bg-accent",
    },
  ];

  const programs = [
    {
      name: "Tahsin Al-Quran",
      description: "Program perbaikan bacaan Al-Quran dengan bimbingan guru tahsin yang berpengalaman",
    },
    {
      name: "Dhuha Bersama",
      description: "Sholat Dhuha berjamaah setiap hari Senin dan Kamis",
    },
    {
      name: "Kajian Kitab",
      description: "Kajian kitab-kitab klasik untuk meningkatkan pemahaman Islam",
    },
    {
      name: "Tarhib Ramadhan",
      description: "Kegiatan persiapan menyambut bulan suci Ramadhan",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kegiatan ROHIS</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Berbagai program dan kegiatan untuk meningkatkan spiritualitas dan solidaritas antar anggota
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Kegiatan Reguler & Tahunan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`h-2 ${activity.color}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{activity.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{activity.schedule}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Program Unggulan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{program.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-lg text-center animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ingin Bergabung dalam Kegiatan?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Semua kegiatan ROHIS terbuka untuk seluruh siswa SMKN 29 Jakarta. Mari bergabung dan berkembang bersama kami dalam kebaikan.
              </p>
              <div className="bg-primary/10 rounded-lg p-6">
                <p className="text-foreground font-medium">
                  Hubungi kami untuk informasi lebih lanjut tentang kegiatan dan cara bergabung
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Kegiatan;
