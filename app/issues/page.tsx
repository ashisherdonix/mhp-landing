import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  GraduationCap, 
  Users, 
  Heart, 
  Home, 
  School, 
  Brain, 
  Smartphone, 
  Activity, 
  Globe,
  AlertTriangle,
  Target,
  Shield,
  BookOpen,
  User,
  MessageCircle,
  Zap
} from "lucide-react";

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Mental Health Issues We <span className="text-primary">Address</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive support for every challenge Indian students face in their mental health journey
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
            <Target className="w-4 h-4" />
            <span>Culturally-aware, age-appropriate treatment approaches</span>
          </div>
        </div>

        {/* Issues Categories Grid */}
        <div className="space-y-12">
          
          {/* Academic Stress & Performance */}
          <Card className="border-2 border-destructive/20 bg-destructive/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-destructive/15 rounded-sm flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <CardTitle className="text-xl text-destructive">Academic Stress & Performance</CardTitle>
                  <CardDescription>Exam anxiety, study pressure, and academic challenges</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Exam & Study Stress</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Board exam pressure (10th/12th)</li>
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Competitive exam stress (JEE, NEET)</li>
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Test anxiety and panic attacks</li>
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Fear of academic failure</li>
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Performance comparison with peers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Learning Challenges</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Difficulty concentrating</li>
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Learning disabilities (ADHD, dyslexia)</li>
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Procrastination and time management</li>
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Study burnout and fatigue</li>
                    <li className="flex items-start"><span className="text-destructive mr-2">•</span>Career confusion and indecision</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social & Peer Relations */}
          <Card className="border-2 border-secondary/30 bg-secondary/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-secondary/15 rounded-sm flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-secondary">Social & Peer Relations</CardTitle>
                  <CardDescription>Bullying, peer pressure, and social difficulties</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Bullying & Harassment</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Physical and verbal bullying</li>
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Cyberbullying and online harassment</li>
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Social exclusion and isolation</li>
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Caste/class-based discrimination</li>
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Body shaming and appearance issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Peer Pressure</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Pressure to conform to group behavior</li>
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Academic competition stress</li>
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Social media comparison pressure</li>
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Fear of being different</li>
                    <li className="flex items-start"><span className="text-secondary mr-2">•</span>Friendship conflicts and betrayals</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gender & Relationship Education */}
          <Card className="border-2 border-accent/30 bg-accent/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-accent/15 rounded-sm flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl text-accent-foreground">Gender & Relationship Education</CardTitle>
                  <CardDescription>Identity development and relationship guidance</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Social Interaction</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-accent mr-2">•</span>Difficulty talking to opposite gender</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span>Understanding opposite sex behavior</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span>Social anxiety in mixed groups</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span>Cultural restrictions on interaction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Identity & Development</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-accent mr-2">•</span>Body image during puberty</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span>Gender identity questions</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span>First relationship anxiety</li>
                    <li className="flex items-start"><span className="text-accent mr-2">•</span>Heartbreak and rejection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Family & Home Environment */}
          <Card className="border-2 border-primary/30 bg-primary/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-primary/15 rounded-sm flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-primary">Family & Home Environment</CardTitle>
                  <CardDescription>Parent relationships and family dynamics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Parent-Related Issues</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>High parental expectations</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Lack of emotional support</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Constant comparison with others</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Over-protective or controlling parents</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Communication breakdown</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Family Dynamics</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Sibling rivalry and competition</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Extended family pressure</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Parents' marital conflicts</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Financial stress impact</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Cultural identity conflicts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* School Environment & Authority Issues */}
          <Card className="border-2 border-amber-500/30 bg-amber-500/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-amber-500/15 rounded-sm flex items-center justify-center">
                  <School className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-amber-600">School Environment & Authority</CardTitle>
                  <CardDescription>Teacher issues and institutional problems</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Teacher-Related Problems</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Abusive or harsh teachers</li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Favoritism and unfair treatment</li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Sexual harassment by staff</li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Inappropriate punishment methods</li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Fear of approaching teachers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Institutional Issues</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Rigid rules and policies</li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Lack of mental health resources</li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Overcrowded classrooms</li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Discrimination based on background</li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">•</span>Administrative pressure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Behavioral & Emotional Challenges */}
          <Card className="border-2 border-red-500/30 bg-red-500/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-red-500/15 rounded-sm flex items-center justify-center">
                  <Brain className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-red-600">Behavioral & Emotional Challenges</CardTitle>
                  <CardDescription>Depression, anxiety, and serious mental health concerns</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Emotional Regulation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Depression and persistent sadness</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Anxiety disorders and panic attacks</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Anger management problems</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Frequent mood swings</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Emotional numbness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Crisis Behaviors</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Self-harm tendencies</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Suicidal thoughts or ideation</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Aggressive behavior</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Social withdrawal</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2">•</span>Risk-taking behaviors</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sexual Health & Development */}
          <Card className="border-2 border-pink-500/30 bg-pink-500/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-pink-500/15 rounded-sm flex items-center justify-center">
                  <Activity className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-pink-600">Sexual Health & Development</CardTitle>
                  <CardDescription>Normal sexual development and health education</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Sexual Development</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Masturbation guilt and shame</li>
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Sexual curiosity and questions</li>
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Wet dreams and sexual thoughts</li>
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Religious/cultural guilt around sexuality</li>
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Sexual health education gaps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Body Development</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Puberty-related anxiety and confusion</li>
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Growth spurts and development concerns</li>
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Body hair and physical changes</li>
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Voice changes and hormonal effects</li>
                    <li className="flex items-start"><span className="text-pink-600 mr-2">•</span>Menstrual health and hygiene</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Romantic Relationships & Heartbreak */}
          <Card className="border-2 border-purple-500/30 bg-purple-500/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-purple-500/15 rounded-sm flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-purple-600">Romantic Relationships & Heartbreak</CardTitle>
                  <CardDescription>Love, relationships, and emotional attachments</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Relationship Challenges</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>First love and intense emotions</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Heartbreak and breakup depression</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Unrequited love and rejection</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Secret relationships due to cultural restrictions</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Romantic obsession and attachment issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Cultural Conflicts</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Family disapproval of relationships</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Arranged marriage pressure vs. personal choice</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Dating restrictions and cultural guilt</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Balancing tradition with modern relationships</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">•</span>Fear of bringing shame to family</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spiritual & Existential Questions */}
          <Card className="border-2 border-indigo-500/30 bg-indigo-500/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-indigo-500/15 rounded-sm flex items-center justify-center">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-indigo-600">Spiritual & Existential Questions</CardTitle>
                  <CardDescription>Life purpose, meaning, and spiritual conflicts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Religious & Spiritual</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Questioning religious beliefs</li>
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Conflict between personal beliefs and family</li>
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Guilt around religious practices</li>
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Identity conflicts with traditional values</li>
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Spiritual searching and confusion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Existential Concerns</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>"What's the point?" questioning</li>
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Fear of death or mortality concerns</li>
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Purpose and meaning in life</li>
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Fear of adulthood and independence</li>
                    <li className="flex items-start"><span className="text-indigo-600 mr-2">•</span>Feeling lost or directionless</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology & Modern Life Issues */}
          <Card className="border-2 border-blue-500/30 bg-blue-500/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-blue-500/15 rounded-sm flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-600">Technology & Digital Issues</CardTitle>
                  <CardDescription>Social media, gaming addiction, and digital age challenges</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Digital Addiction</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Social media addiction</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Gaming addiction and dependency</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Fear of missing out (FOMO)</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Screen time affecting sleep</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Online Safety</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Cyberbullying and trolling</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Online predators and safety</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Comparison with influencers</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Pressure to maintain online image</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Substance Use & Addiction */}
          <Card className="border-2 border-orange-500/30 bg-orange-500/5 rounded-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-orange-500/15 rounded-sm flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-orange-600">Substance Use & Addiction</CardTitle>
                  <CardDescription>Substance experimentation and addiction concerns</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Substance Experimentation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Smoking and tobacco use</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Alcohol experimentation pressure</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Drug use curiosity and peer pressure</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Prescription drug misuse</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Caffeine and energy drink dependency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Addiction Concerns</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Early addiction warning signs</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Hiding substance use from family</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Academic performance decline</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Behavioral changes due to substance use</li>
                    <li className="flex items-start"><span className="text-orange-600 mr-2">•</span>Withdrawal and dependency issues</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Crisis Support Call-to-Action */}
        <Card className="mt-16 bg-gradient-to-r from-destructive/10 via-red-500/10 to-destructive/10 border-destructive/30 border-2 rounded-sm shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-destructive mb-4">Crisis Support Available 24/7</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
              If you or a student is experiencing thoughts of self-harm, abuse, or any crisis situation, 
              immediate support is available through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-lg px-8">
                Get Crisis Support
              </Button>
              <Button variant="outline" size="lg" className="border-destructive text-destructive hover:bg-destructive/5 text-lg px-8">
                Learn About Our Safety Protocols
              </Button>
            </div>
          </CardContent>
        </Card>

      </main>
      <Footer />
    </div>
  );
}