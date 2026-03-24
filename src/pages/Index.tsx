import { motion } from "framer-motion";
import { Scissors, Palette, Ruler, DollarSign, Layout, Download, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-leather.jpg";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const features = [
  { icon: Layout, title: "Canvas Editor", desc: "Drag & drop design interface with pre-built leather templates" },
  { icon: Palette, title: "Customization", desc: "Choose leather shades, textures, and stitch patterns" },
  { icon: Ruler, title: "Dimensions", desc: "Set real measurements with live scaling on canvas" },
  { icon: DollarSign, title: "Cost Estimator", desc: "Instant pricing based on material, size & labor" },
  { icon: Scissors, title: "Templates", desc: "Start from wallets, bags, belts — edit freely" },
  { icon: Download, title: "Export", desc: "Save designs and export cutting patterns as PDF" },
];

const templates = [
  { name: "Classic Wallet", category: "Wallet", colors: ["hsl(25,40%,30%)", "hsl(30,50%,45%)", "hsl(20,35%,20%)"] },
  { name: "Tote Handbag", category: "Bag", colors: ["hsl(35,45%,55%)", "hsl(25,30%,35%)", "hsl(30,60%,40%)"] },
  { name: "Leather Belt", category: "Belt", colors: ["hsl(20,50%,18%)", "hsl(25,40%,30%)", "hsl(35,35%,50%)"] },
  { name: "Card Holder", category: "Wallet", colors: ["hsl(30,45%,40%)", "hsl(25,50%,25%)", "hsl(35,55%,60%)"] },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80"
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            Leather<span className="text-accent">Craft</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm" className="bg-gradient-warm text-primary-foreground">Sign up</Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-hero">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-accent tracking-widest uppercase">
              Design · Estimate · Export
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Design Leather Products{" "}
              <span className="text-gradient">Like a Pro</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-md leading-relaxed">
              The all-in-one design tool for leather artisans and small entrepreneurs.
              Create, customize, estimate costs, and export production-ready patterns.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex gap-4 pt-2">
              <Button size="lg" className="bg-gradient-warm text-primary-foreground gap-2 shadow-elevated">
                Start Designing <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Templates
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Premium leather crafting materials and tools on artisan workspace"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-soft">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">AI Suggestions</p>
                  <p className="text-xs text-muted-foreground">Smart design recommendations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
              Powerful Tools
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Everything You Need to Create
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                className="group p-6 rounded-xl bg-card border border-border hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-warm flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
              Quick Start
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Start From a Template
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {templates.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="h-40 flex items-center justify-center" style={{ background: t.colors[0] }}>
                  <span className="font-display text-2xl font-bold" style={{ color: "hsl(30,25%,90%)" }}>
                    {t.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground">{t.name}</h3>
                  <div className="flex gap-1.5 mt-2">
                    {t.colors.map((c, ci) => (
                      <span key={ci} className="w-5 h-5 rounded-full border border-border" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Ready to Bring Your Designs to Life?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg">
              Join hundreds of leather artisans already using LeatherCraft to design, estimate, and produce beautiful leather goods.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Button size="lg" className="bg-gradient-warm text-primary-foreground gap-2 shadow-elevated">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold text-foreground">
            Leather<span className="text-accent">Craft</span>
          </span>
          <p className="text-sm text-muted-foreground">© 2026 LeatherCraft. Built for artisans.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
