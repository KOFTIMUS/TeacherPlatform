import { Plus } from "lucide-react";

import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Container,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Section,
  Select,
  Separator,
  Skeleton,
  Switch,
  Textarea,
} from "@/components/ui";

function ShowcaseBlock({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-foreground-muted">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function UIShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <Section spacing="compact" background="subtle">
        <Container size="xl">
          <div className="flex flex-col gap-2 py-4">
            <Badge variant="outline">Development Only</Badge>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              UI Kit Showcase
            </h1>
            <p className="max-w-2xl text-sm text-foreground-muted">
              Geliştirme amaçlı bileşen vitrini. Production ortamında
              erişilemez.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="xl" className="flex flex-col gap-12">
          <ShowcaseBlock
            title="Button"
            description="Tüm variant ve boyut örnekleri."
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Ekle">
                  <Plus />
                </Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </ShowcaseBlock>

          <Separator />

          <ShowcaseBlock
            title="Form Controls"
            description="Input, textarea, select ve label örnekleri."
          >
            <div className="grid max-w-xl gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="showcase-name" required>
                  Ad Soyad
                </Label>
                <Input
                  id="showcase-name"
                  placeholder="Örn. Emre İdin"
                  defaultValue="Emre İdin"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="showcase-email">E-posta</Label>
                <Input
                  id="showcase-email"
                  type="email"
                  placeholder="ornek@email.com"
                  error
                  defaultValue="gecersiz-email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="showcase-bio">Biyografi</Label>
                <Textarea
                  id="showcase-bio"
                  placeholder="Kısa bir açıklama yazın..."
                  defaultValue="Matematik öğretmeni, 10 yıllık deneyim."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="showcase-subject">Branş</Label>
                <Select id="showcase-subject" defaultValue="math">
                  <option value="math">Matematik</option>
                  <option value="physics">Fizik</option>
                  <option value="english">İngilizce</option>
                </Select>
              </div>
            </div>
          </ShowcaseBlock>

          <Separator />

          <ShowcaseBlock
            title="Checkbox, Radio & Switch"
            description="Seçim bileşenleri."
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-6">
                <Checkbox label="Bildirimleri aç" defaultChecked />
                <Checkbox label="Devre dışı seçenek" disabled />
              </div>
              <RadioGroup label="Ders formatı" name="lesson-format">
                <RadioGroupItem
                  itemLabel="Online"
                  value="online"
                  defaultChecked
                />
                <RadioGroupItem itemLabel="Yüz yüze" value="in-person" />
                <RadioGroupItem itemLabel="Hibrit" value="hybrid" />
              </RadioGroup>
              <div className="flex flex-wrap gap-6">
                <Switch label="Profili herkese açık" defaultChecked />
                <Switch label="Kapalı switch" />
              </div>
            </div>
          </ShowcaseBlock>

          <Separator />

          <ShowcaseBlock title="Card" description="İçerik kartı örneği.">
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Matematik Öğretmeni</CardTitle>
                <CardDescription>
                  Lise ve üniversite hazırlık dersleri.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground-muted">
                  10 yıllık deneyim, online ve yüz yüze ders imkânı.
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button variant="outline" size="sm">
                  Profili Gör
                </Button>
              </CardFooter>
            </Card>
          </ShowcaseBlock>

          <Separator />

          <ShowcaseBlock title="Badge" description="Durum ve etiketler.">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </ShowcaseBlock>

          <Separator />

          <ShowcaseBlock title="Avatar" description="Boyut ve durum örnekleri.">
            <div className="flex flex-wrap items-end gap-4">
              <Avatar size="xs" fallback="Emre İdin" />
              <Avatar size="sm" fallback="Ayşe Yılmaz" />
              <Avatar size="default" fallback="Emre İdin" status="online" />
              <Avatar size="lg" fallback="Can Demir" status="offline" />
              <Avatar size="xl" fallback="Zeynep Kaya" />
            </div>
          </ShowcaseBlock>

          <Separator />

          <ShowcaseBlock title="Skeleton" description="Yükleme placeholder.">
            <div className="flex max-w-md flex-col gap-4">
              <div className="flex items-center gap-4">
                <Skeleton variant="circular" className="size-12" />
                <div className="flex flex-1 flex-col gap-2">
                  <Skeleton variant="text" className="w-3/4" />
                  <Skeleton variant="text" className="w-1/2" />
                </div>
              </div>
              <Skeleton className="h-24 w-full" />
            </div>
          </ShowcaseBlock>

          <Separator />

          <ShowcaseBlock
            title="Separator"
            description="Yatay ve dikey ayırıcı."
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm text-foreground-muted">Yatay ayırıcı</p>
              <Separator />
              <div className="flex h-8 items-center gap-4">
                <span className="text-sm">Sol</span>
                <Separator orientation="vertical" />
                <span className="text-sm">Sağ</span>
              </div>
            </div>
          </ShowcaseBlock>

          <Separator />

          <ShowcaseBlock
            title="Container & Section"
            description="Layout bileşenleri bu sayfanın yapısında kullanılıyor."
          >
            <div className="rounded-md border border-border bg-background-subtle p-6">
              <p className="text-sm text-foreground-muted">
                Bu vitrin sayfası{" "}
                <code className="text-foreground">Container</code> ve{" "}
                <code className="text-foreground">Section</code> bileşenleriyle
                sarılmıştır. Maksimum genişlik ve responsive padding token
                değerlerinden gelir.
              </p>
            </div>
          </ShowcaseBlock>
        </Container>
      </Section>
    </div>
  );
}
