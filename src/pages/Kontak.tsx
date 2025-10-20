import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Kontak = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "SMKN 29 Jakarta, Jl. Balai Rakyat, Cipinang Besar Selatan, Jatinegara, Jakarta Timur",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "(021) 1234-5678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "rohis@smkn29jkt.sch.id",
    },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "hover:text-[#1877F2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-[#E4405F]",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
      color: "hover:text-[#FF0000]",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Ada pertanyaan atau ingin bergabung? Jangan ragu untuk menghubungi kami
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{info.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-lg animate-slide-in-left">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Nomor Telepon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08xx xxxx xxxx"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      required
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-lg animate-slide-in-right">
              <CardContent className="p-0 h-full">
                <div className="h-full min-h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Lokasi Kami</h3>
                    <p className="text-muted-foreground">
                      SMKN 29 Jakarta<br />
                      Jl. Balai Rakyat, Cipinang Besar Selatan<br />
                      Jatinegara, Jakarta Timur
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">Ikuti Kami di Media Sosial</h2>
            <div className="flex justify-center gap-6">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 bg-muted rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.name}
                >
                  <social.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground animate-fade-in-up">
              Tetap update dengan kegiatan dan informasi terbaru dari ROHIS SMKN 29 Jakarta
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
