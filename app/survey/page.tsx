"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  ArrowLeft, 
  CheckCircle, 
  Download,
  RefreshCw,
  Brain,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";

interface Question {
  id: string;
  type: "radio" | "checkbox" | "likert" | "text";
  question: string;
  options?: string[];
  category?: string;
}

const surveyQuestions = {
  basic: [
    {
      id: "role",
      type: "radio" as const,
      question: "Your Role",
      options: ["Student", "Parent", "Teacher"]
    },
    {
      id: "class_level",
      type: "radio" as const,
      question: "Student's Class Level",
      options: ["Primary (1-5)", "Middle (6-8)", "Secondary (9-10)", "Senior Secondary (11-12)"]
    },
    {
      id: "school_type",
      type: "radio" as const,
      question: "School Type",
      options: ["Government", "Private", "Semi-Government", "Other"]
    }
  ],
  student: [
    {
      id: "body_safety",
      type: "checkbox" as const,
      question: "What topics related to growing up do you find difficult to discuss? (Select all that apply)",
      options: [
        "Body changes and physical development",
        "Menstrual health and related concerns", 
        "Body image, weight, and appearance",
        "Attraction and romantic relationships",
        "Questions about identity and sexuality",
        "Peer pressure about dating/relationships",
        "Sexual health and safety questions",
        "None - I'm comfortable discussing everything"
      ],
      category: "Development & Safety"
    },
    {
      id: "safety_boundaries",
      type: "checkbox" as const,
      question: "Which safety and boundary concerns affect you? (Select all that apply)",
      options: [
        "Inappropriate comments about my body/appearance",
        "Unwanted physical contact or touch",
        "Online harassment or cyberbullying",
        "Pressure to do things I'm uncomfortable with",
        "Don't know who to talk to about uncomfortable situations",
        "Feel unsafe in certain school areas",
        "Social media pressure about appearance/relationships",
        "None of these affect me"
      ],
      category: "Safety & Boundaries"
    },
    {
      id: "academic_stress",
      type: "checkbox" as const,
      question: "What family and academic stressors impact you? (Select all that apply)",
      options: [
        "Parents fighting or family conflicts",
        "Financial stress affecting family",
        "High academic pressure from family",
        "Comparison to siblings or other students",
        "Fear of disappointing parents with grades",
        "Family expectations about career/future",
        "Difficulty concentrating due to home problems",
        "None of these are major issues for me"
      ],
      category: "Academic & Family Stress"
    },
    {
      id: "emotional_challenges",
      type: "checkbox" as const,
      question: "What emotional challenges do you experience? (Select all that apply)",
      options: [
        "Feeling overwhelmed by schoolwork",
        "Difficulty expressing emotions",
        "Fear of failure or making mistakes",
        "Low self-confidence or self-doubt",
        "Anxiety about social situations",
        "Trouble managing anger or frustration",
        "Feeling isolated or lonely",
        "Mood swings or emotional instability"
      ],
      category: "Emotional Challenges"
    },
    {
      id: "coping_behaviors",
      type: "checkbox" as const,
      question: "How do you typically cope when feeling stressed or upset? (Select all that apply)",
      options: [
        "Talk to friends or family",
        "Use phone/social media to distract myself",
        "Listen to music or do creative activities",
        "Exercise or physical activity",
        "Try breathing exercises or meditation",
        "Avoid the situation or skip responsibilities",
        "Get angry or act out",
        "Keep feelings to myself"
      ],
      category: "Coping Behaviors"
    },
    {
      id: "social_conflicts",
      type: "checkbox" as const,
      question: "What usually causes conflicts with other students? (Select all that apply)",
      options: [
        "Academic competition or grade comparisons",
        "Social status, popularity, or rumors",
        "Romantic relationship drama",
        "Bullying or teasing about appearance",
        "Differences in identity, beliefs, or lifestyle",
        "Peer pressure situations",
        "Misunderstandings or communication issues",
        "I rarely have conflicts with other students"
      ],
      category: "Social Conflicts"
    },
    {
      id: "academic_confidence",
      type: "likert" as const,
      question: "How confident do you feel about your academic abilities?",
      options: ["Very unconfident", "Somewhat unconfident", "Neither confident nor unconfident", "Somewhat confident", "Very confident"],
      category: "Academic Confidence"
    },
    {
      id: "support_systems",
      type: "checkbox" as const,
      question: "Who do you feel comfortable talking to about personal problems? (Select all that apply)",
      options: [
        "Parents or family members",
        "Close friends",
        "Teachers or school counselors",
        "Online friends or communities",
        "Mental health professionals",
        "Religious or community leaders",
        "No one - I keep problems to myself",
        "Other trusted adults"
      ],
      category: "Support Systems"
    },
    {
      id: "academic_pressure",
      type: "likert" as const,
      question: "How much pressure do you feel about your academic performance and future?",
      options: ["No pressure", "Little pressure", "Moderate pressure", "High pressure", "Overwhelming pressure"],
      category: "Academic Pressure"
    },
    {
      id: "support_preferences",
      type: "checkbox" as const,
      question: "What types of mental health support would be most helpful to you? (Select all that apply)",
      options: [
        "Apps or tools to track emotions and mood",
        "Group discussions with other students",
        "One-on-one counseling or therapy",
        "Educational resources about mental health",
        "Peer support groups or clubs",
        "Family counseling or therapy",
        "Online resources and information",
        "I don't think I need mental health support"
      ],
      category: "Support Preferences"
    },
    {
      id: "personal_concerns",
      type: "text" as const,
      question: "What is your biggest concern or worry right now that affects your daily life?",
      category: "Personal Concerns"
    }
  ],
  parent: [
    {
      id: "development_concerns",
      type: "checkbox" as const,
      question: "What concerns do you observe about your child's development? (Select all that apply)",
      options: [
        "Body image or appearance concerns",
        "Difficulty understanding physical/emotional changes",
        "Peer pressure regarding relationships/dating",
        "Safety concerns (inappropriate behavior from others)",
        "Questions about sexuality/identity",
        "Social media pressure about appearance",
        "Emotional sensitivity and mood swings",
        "None of these are concerns"
      ],
      category: "Development Concerns"
    },
    {
      id: "academic_behavioral_changes",
      type: "checkbox" as const,
      question: "What changes have you noticed in your child's behavior around schoolwork? (Select all that apply)",
      options: [
        "Increased phone use during study time",
        "Avoiding homework or making excuses",
        "Perfectionist behavior or meltdowns over grades",
        "Fighting with family about school",
        "Physical complaints before school (headaches, stomach aches)",
        "Increased conflict with siblings or family",
        "Procrastination or difficulty organizing work",
        "No significant changes noticed"
      ],
      category: "Academic Behavioral Changes"
    },
    {
      id: "emotional_distress_signs",
      type: "checkbox" as const,
      question: "What signs suggest your child is struggling emotionally? (Select all that apply)",
      options: [
        "Increased phone/social media usage",
        "Sleep problems or changes in sleep patterns",
        "Complaints about other students or drama",
        "Reluctance to go to school",
        "Mood changes after school",
        "Fighting with family more often",
        "Withdrawal from family activities",
        "Changes in appetite or eating habits"
      ],
      category: "Emotional Distress Signs"
    },
    {
      id: "family_communication",
      type: "likert" as const,
      question: "How often does your child talk to you about emotional issues?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
      category: "Family Communication"
    },
    {
      id: "family_academic_climate",
      type: "radio" as const,
      question: "How often do discussions about school/grades lead to family conflict?",
      options: [
        "Never - we discuss school calmly",
        "Rarely - only during report cards",
        "Sometimes - a few times per month",
        "Often - weekly arguments about school",
        "Very often - daily tension about academics"
      ],
      category: "Family Academic Climate"
    },
    {
      id: "child_emotional_challenges",
      type: "checkbox" as const,
      question: "What emotional challenges do you think your child faces most? (Select all that apply)",
      options: [
        "Fear of failure",
        "Difficulty managing emotions",
        "Anxiety or overthinking",
        "Peer pressure",
        "Screen/social media addiction",
        "Lack of motivation",
        "Body image concerns",
        "Identity confusion"
      ],
      category: "Child's Emotional Challenges"
    },
    {
      id: "upset_behaviors",
      type: "checkbox" as const,
      question: "What behaviors have you noticed when your child is emotionally upset? (Select all that apply)",
      options: [
        "Irritability or snapping at family",
        "Withdrawal from family interactions",
        "Crying or emotional outbursts",
        "Anger outbursts or aggressive behavior",
        "Sleep changes (too much or too little)",
        "Loss of interest in activities they used to enjoy",
        "Avoiding family conversations",
        "Physical complaints without medical cause"
      ],
      category: "Upset Behaviors"
    },
    {
      id: "parental_confidence",
      type: "radio" as const,
      question: "Do you feel confident in identifying emotional distress in your child?",
      options: ["Yes", "Somewhat", "No"],
      category: "Parental Confidence"
    },
    {
      id: "school_support_needs",
      type: "checkbox" as const,
      question: "What support do you feel the school should provide for emotional well-being? (Select all that apply)",
      options: [
        "Individual counseling sessions",
        "Life-skills and emotional intelligence classes",
        "Regular mental-health checkups",
        "Parent-teacher emotional awareness programs",
        "Development and body safety education",
        "Peer support groups for students",
        "Crisis intervention resources",
        "Family counseling support"
      ],
      category: "School Support Needs"
    },
    {
      id: "family_concerns",
      type: "text" as const,
      question: "What is your biggest concern about your child's emotional wellbeing or development right now?",
      category: "Family Concerns"
    }
  ],
  teacher: [
    {
      id: "development_challenges",
      type: "checkbox" as const,
      question: "What development-related challenges do you observe in students? (Select all that apply)",
      options: [
        "Body image insecurities or self-consciousness",
        "Teasing about physical development",
        "Difficulty managing emotional/physical changes",
        "Relationship-related distractions",
        "Boundary issues with peers",
        "Inappropriate comments or behavior between students",
        "Questions about identity/sexuality",
        "None observed"
      ],
      category: "Development Challenges"
    },
    {
      id: "disruptive_behaviors",
      type: "checkbox" as const,
      question: "What disruptive behaviors do you observe most in emotionally distressed students? (Select all that apply)",
      options: [
        "Excessive phone use or digital distraction",
        "Verbal conflicts or arguments with peers",
        "Defiance or challenging authority",
        "Sleeping or complete withdrawal in class",
        "Perfectionist anxiety or meltdowns over grades",
        "Physical aggression or threatening behavior",
        "Attention-seeking behaviors",
        "Frequent absences or tardiness"
      ],
      category: "Disruptive Behaviors"
    },
    {
      id: "student_emotional_challenges",
      type: "checkbox" as const,
      question: "What emotional challenges do you observe most commonly in students? (Select all that apply)",
      options: [
        "Low confidence or self-esteem",
        "Inability to concentrate or focus",
        "Emotional outbursts or mood swings",
        "Peer conflict and social difficulties",
        "Academic pressure and stress",
        "Social withdrawal or isolation",
        "Body image concerns",
        "Family-related stress affecting behavior"
      ],
      category: "Student Emotional Challenges"
    },
    {
      id: "distress_signs",
      type: "checkbox" as const,
      question: "What signs indicate a student is emotionally distressed? (Select all that apply)",
      options: [
        "Decline in academic performance",
        "Increased absenteeism or tardiness",
        "Difficulty focusing or completing tasks",
        "Withdrawn behavior or avoiding interaction",
        "Irritability or mood changes",
        "Aggressive behavior toward peers",
        "Changes in peer interactions",
        "Physical complaints (headaches, stomach aches)"
      ],
      category: "Distress Signs"
    },
    {
      id: "academic_stress_impact",
      type: "radio" as const,
      question: "What percentage of student behavioral problems stem from academic pressure or family stress?",
      options: [
        "Less than 25% - mostly other factors",
        "25-50% - significant but not majority",
        "50-75% - major contributing factor",
        "More than 75% - primary cause",
        "Difficult to determine the cause"
      ],
      category: "Academic Stress Impact"
    },
    {
      id: "help_seeking_behavior",
      type: "likert" as const,
      question: "How often do students approach you for emotional help?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      category: "Help-Seeking Behavior"
    },
    {
      id: "student_teacher_relationship",
      type: "likert" as const,
      question: "How comfortable do students seem when approaching you about non-academic concerns?",
      options: ["Very uncomfortable", "Uncomfortable", "Neutral", "Comfortable", "Very comfortable"],
      category: "Student-Teacher Relationship"
    },
    {
      id: "family_impact_observations",
      type: "radio" as const,
      question: "How often do you notice family stress/conflict affecting student behavior in class?",
      options: [
        "Daily - very obvious impact",
        "Weekly - frequent observations",
        "Monthly - occasional signs",
        "Rarely - seldom notice family impact",
        "Never - don't see connection"
      ],
      category: "Family Impact Observations"
    },
    {
      id: "teacher_comfort",
      type: "likert" as const,
      question: "How comfortable are you in handling emotional concerns of students?",
      options: ["Very uncomfortable", "Uncomfortable", "Neutral", "Comfortable", "Very comfortable"],
      category: "Teacher Comfort"
    },
    {
      id: "sensitive_topic_handling",
      type: "likert" as const,
      question: "How comfortable are you addressing sensitive development concerns (body changes, safety, boundaries)?",
      options: ["Very uncomfortable", "Uncomfortable", "Neutral", "Comfortable", "Very comfortable"],
      category: "Sensitive Topic Handling"
    },
    {
      id: "training_needs",
      type: "checkbox" as const,
      question: "What support/training do you feel is needed to handle students' emotional needs? (Select all that apply)",
      options: [
        "Mental-health training workshops",
        "Teacher counseling support",
        "More time for one-on-one interaction",
        "Emotional intelligence training",
        "Support from school counselor",
        "Training on development and puberty topics",
        "Guidance on addressing sexual health topics",
        "Crisis intervention training"
      ],
      category: "Training Needs"
    },
    {
      id: "professional_observations",
      type: "text" as const,
      question: "What do you think is the biggest mental health or development challenge students need support with?",
      category: "Professional Observations"
    }
  ]
};

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState<"role-selection" | "survey" | "results">("role-selection");
  const [selectedRole, setSelectedRole] = useState<"student" | "parent" | "teacher" | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<{[key: string]: any}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getCurrentQuestions = (): Question[] => {
    if (!selectedRole) return [];
    // Skip the role question since user already selected role in UI
    const basicQuestions = surveyQuestions.basic.filter(q => q.id !== "role");
    return [...basicQuestions, ...surveyQuestions[selectedRole]];
  };

  const currentQuestions = getCurrentQuestions();
  const totalQuestions = currentQuestions.length;
  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (currentStep !== "survey") return;
      
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const currentQuestion = currentQuestions[currentQuestionIndex];
        if (currentQuestion?.type === "text") {
          nextQuestion();
        }
      }
      
      if (e.key === 'ArrowRight' || (e.key === 'Tab' && e.ctrlKey)) {
        e.preventDefault();
        const currentQuestion = currentQuestions[currentQuestionIndex];
        if (currentQuestion && responses[currentQuestion.id]) {
          nextQuestion();
        }
      }
      
      if (e.key === 'ArrowLeft' || (e.key === 'Tab' && e.ctrlKey && e.shiftKey)) {
        e.preventDefault();
        prevQuestion();
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentStep, currentQuestionIndex, responses, currentQuestions]);

  const handleRoleSelection = (role: "student" | "parent" | "teacher") => {
    setSelectedRole(role);
    setResponses({ role });
    
    // Check for auto-saved responses
    const savedData = localStorage.getItem('survey_responses_temp');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.role === role && Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
          // Resume from saved state if within 24 hours
          setResponses(parsed.responses);
          setCurrentQuestionIndex(parsed.currentQuestionIndex);
        }
      } catch (e) {
        console.warn('Failed to parse saved survey data');
      }
    }
    
    setCurrentStep("survey");
  };

  const handleResponse = (questionId: string, answer: any) => {
    setResponses(prev => ({ ...prev, [questionId]: answer }));
    
    // Auto-save to localStorage
    setAutoSaveStatus("saving");
    const updatedResponses = { ...responses, [questionId]: answer };
    localStorage.setItem('survey_responses_temp', JSON.stringify({
      role: selectedRole,
      currentQuestionIndex,
      responses: updatedResponses,
      timestamp: Date.now()
    }));
    
    setTimeout(() => {
      setAutoSaveStatus("saved");
      setTimeout(() => setAutoSaveStatus("idle"), 1500);
    }, 300);
    
    // Auto-advance for single-choice questions (radio and likert)
    const currentQuestion = currentQuestions[currentQuestionIndex];
    if (currentQuestion && (currentQuestion.type === "radio" || currentQuestion.type === "likert")) {
      setTimeout(() => {
        nextQuestion();
      }, 800); // Slight delay for user to see their selection
    }
  };

  const submitSurvey = async () => {
    const surveyData = {
      id: `survey_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      role: selectedRole,
      timestamp: new Date().toISOString(),
      responses: responses,
      userAgent: navigator.userAgent,
      completionTime: Date.now()
    };

    try {
      // Send to your backend API
      const response = await fetch('/api/submit-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(surveyData)
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      console.log('Survey submitted successfully');
      setCurrentStep("results");
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting survey:', error);
      // Fallback to localStorage if API fails
      localStorage.setItem(`emphio_survey_${surveyData.id}`, JSON.stringify(surveyData));
      setCurrentStep("results");
      setIsSubmitted(true);
    }
  };

  const nextQuestion = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        submitSurvey();
      }
      setIsTransitioning(false);
    }, 200);
  };

  const prevQuestion = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(prev => prev - 1);
      }
      setIsTransitioning(false);
    }, 200);
  };

  const resetSurvey = () => {
    setCurrentStep("role-selection");
    setSelectedRole(null);
    setCurrentQuestionIndex(0);
    setResponses({});
    setIsSubmitted(false);
  };

  const downloadReport = () => {
    const reportData = {
      role: selectedRole,
      timestamp: new Date().toISOString(),
      responses: responses
    };
    
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `mental-health-survey-${selectedRole}-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const renderRoleSelection = () => (
    <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
          Mental Health Assessment
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
          Help us understand mental health in schools
        </p>
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30">
          <Brain className="w-3 h-3" />
          <span>Anonymous & Confidential</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border hover:border-secondary/60 active:scale-95" 
              onClick={() => handleRoleSelection("student")}>
          <CardHeader className="text-center pb-2 px-4 pt-4">
            <div className="w-10 h-10 bg-secondary/15 rounded-full flex items-center justify-center mx-auto mb-2">
              <GraduationCap className="w-5 h-5 text-secondary" />
            </div>
            <CardTitle className="text-secondary text-base sm:text-lg">Student</CardTitle>
          </CardHeader>
          <CardContent className="text-center px-4 pb-4">
            <p className="text-xs text-muted-foreground">Share your experience</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border hover:border-primary/60"
              onClick={() => handleRoleSelection("parent")}>
          <CardHeader className="text-center pb-2 px-4 pt-4">
            <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-primary text-base sm:text-lg">Parent</CardTitle>
          </CardHeader>
          <CardContent className="text-center px-4 pb-4">
            <p className="text-xs text-muted-foreground">About your child</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border hover:border-accent/60 active:scale-95"
              onClick={() => handleRoleSelection("teacher")}>
          <CardHeader className="text-center pb-2 px-4 pt-4">
            <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="text-accent text-base sm:text-lg">Teacher</CardTitle>
          </CardHeader>
          <CardContent className="text-center px-4 pb-4">
            <p className="text-xs text-muted-foreground">Your observations</p>
          </CardContent>
        </Card>
      </div>

    </div>
  );

  const renderQuestion = () => {
    if (!selectedRole || currentQuestionIndex >= currentQuestions.length) return null;
    
    const question = currentQuestions[currentQuestionIndex];
    const currentResponse = responses[question.id];

    const renderQuestionInput = () => {
      switch (question.type) {
        case "radio":
          return (
            <div className="space-y-3 sm:space-y-4">
              {question.options?.map((option, index) => {
                const isSelected = currentResponse === option;
                return (
                  <label 
                    key={index} 
                    className={`flex items-start space-x-3 cursor-pointer p-4 sm:p-3 rounded-lg border transition-all duration-300 min-h-[60px] sm:min-h-[auto] ${
                      isSelected 
                        ? 'border-primary bg-primary/10 shadow-sm transform scale-[1.02]' 
                        : 'border-border hover:bg-muted/50 hover:border-muted-foreground/30'
                    } active:scale-[0.98]`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={isSelected}
                      onChange={(e) => handleResponse(question.id, e.target.value)}
                      className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    />
                    <span className="text-foreground text-sm sm:text-base leading-relaxed flex-1">{option}</span>
                    {isSelected && (
                      <CheckCircle className="w-5 h-5 text-primary animate-fade-in" />
                    )}
                  </label>
                );
              })}
            </div>
          );
        
        case "checkbox":
          return (
            <div className="space-y-4">
              {question.options?.map((option, index) => {
                const isSelected = Array.isArray(currentResponse) && currentResponse.includes(option);
                return (
                  <label 
                    key={index} 
                    className={`flex items-start space-x-3 cursor-pointer p-4 sm:p-3 rounded-lg border transition-all duration-300 min-h-[60px] sm:min-h-[auto] ${
                      isSelected 
                        ? 'border-primary bg-primary/10 shadow-sm' 
                        : 'border-muted hover:bg-muted/50 hover:border-muted-foreground/30'
                    } active:scale-[0.98]`}
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={isSelected}
                      onChange={(e) => {
                        const current = Array.isArray(currentResponse) ? currentResponse : [];
                        if (e.target.checked) {
                          handleResponse(question.id, [...current, option]);
                        } else {
                          handleResponse(question.id, current.filter((item: string) => item !== option));
                        }
                      }}
                      className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    />
                    <span className="text-foreground leading-relaxed text-base flex-1">{option}</span>
                    {isSelected && (
                      <CheckCircle className="w-5 h-5 text-primary animate-fade-in" />
                    )}
                  </label>
                );
              })}
              <div className="text-xs text-muted-foreground mt-1">
                Multiple selections allowed
              </div>
            </div>
          );

        case "likert":
          return (
            <div className="space-y-3 sm:space-y-4">
              {question.options?.map((option, index) => {
                const isSelected = currentResponse === option;
                return (
                  <label 
                    key={index} 
                    className={`flex items-start space-x-3 cursor-pointer p-4 sm:p-3 rounded-lg border transition-all duration-300 min-h-[60px] sm:min-h-[auto] ${
                      isSelected 
                        ? 'border-primary bg-primary/10 shadow-sm transform scale-[1.02]' 
                        : 'border-border hover:bg-muted/50 hover:border-muted-foreground/30'
                    } active:scale-[0.98]`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={isSelected}
                      onChange={(e) => handleResponse(question.id, e.target.value)}
                      className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    />
                    <span className="text-foreground text-base leading-relaxed flex-1">{index + 1}. {option}</span>
                    {isSelected && (
                      <CheckCircle className="w-5 h-5 text-primary animate-fade-in" />
                    )}
                  </label>
                );
              })}
            </div>
          );

        case "text":
          return (
            <textarea
              value={currentResponse || ""}
              onChange={(e) => handleResponse(question.id, e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-3 border border-border rounded-lg resize-none h-24 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 leading-relaxed"
            />
          );

        default:
          return null;
      }
    };

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        <Card className={`border-0 sm:border shadow-sm sm:shadow-lg transition-all duration-500 ${
          isTransitioning ? 'opacity-50 transform scale-95' : 'opacity-100 transform scale-100'
        }`}>
          <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
            <div className="space-y-4 mb-4">
              {/* Mobile: Progress first, then navigation */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Button 
                  variant="ghost" 
                  onClick={prevQuestion} 
                  disabled={currentQuestionIndex === 0}
                  className="w-full sm:w-auto order-2 sm:order-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 order-1 sm:order-2">
                  <div className="w-full sm:w-48 lg:w-64 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-center sm:text-right flex-shrink-0">
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {currentQuestionIndex + 1} of {totalQuestions}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {Math.round(progress)}% complete
                    </div>
                    {autoSaveStatus === "saving" && (
                      <div className="text-xs text-blue-600 animate-fade-in">
                        ••• Saving...
                      </div>
                    )}
                    {autoSaveStatus === "saved" && (
                      <div className="text-xs text-green-600 animate-fade-in">
                        ✓ Auto-saved
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {question.category && (
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4 animate-slide-in">
                {question.category}
              </div>
            )}
            <CardTitle className="text-base sm:text-lg leading-relaxed">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
            {renderQuestionInput()}
            
            <div className="mt-6 space-y-3">
              <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                {question.type === "checkbox" && (
                  <span>
                    {currentResponse && Array.isArray(currentResponse) && currentResponse.length > 0
                      ? `${currentResponse.length} selected`
                      : "Select options"}
                  </span>
                )}
                {(question.type === "radio" || question.type === "likert") && !currentResponse && (
                  <span>Select an option</span>
                )}
                {question.type === "text" && (
                  <span>Optional</span>
                )}
              </div>
              
              {/* Only show manual next button for checkbox and text questions */}
              {(question.type === "checkbox" || question.type === "text") && (
                <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                  {question.type === "text" && (
                    <Button variant="outline" onClick={nextQuestion} className="w-full sm:w-auto">
                      Skip
                    </Button>
                  )}
                  <Button 
                    onClick={nextQuestion}
                    disabled={question.type === "checkbox" && (!currentResponse || !Array.isArray(currentResponse) || currentResponse.length === 0)}
                    className="w-full sm:w-auto sm:px-6"
                  >
                    {currentQuestionIndex === totalQuestions - 1 ? "Complete" : "Next"}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderResults = () => (
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
      <Card className="mb-8">
        <CardContent className="p-6 sm:p-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Survey Complete!</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
            Thank you for your insights. Your responses will help build better mental health support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="py-2">
              <div className="text-xl sm:text-2xl font-bold text-primary">{totalQuestions}</div>
              <div className="text-sm text-muted-foreground">Questions Answered</div>
            </div>
            <div className="py-2">
              <div className="text-xl sm:text-2xl font-bold text-secondary">{selectedRole ? selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1) : 'Role'}</div>
              <div className="text-sm text-muted-foreground">Role Perspective</div>
            </div>
            <div className="py-2">
              <div className="text-xl sm:text-2xl font-bold text-accent">Anonymous</div>
              <div className="text-sm text-muted-foreground">Data Privacy</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
        <Button onClick={downloadReport} size="lg" className="w-full sm:w-auto px-8">
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
        <Button variant="outline" onClick={resetSurvey} size="lg" className="w-full sm:w-auto px-8">
          <RefreshCw className="w-4 h-4 mr-2" />
          Take Another Survey
        </Button>
      </div>

    </div>
  );

  return (
    <div className="min-h-screen bg-background survey-container">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 survey-content">
        {currentStep === "role-selection" && renderRoleSelection()}
        {currentStep === "survey" && renderQuestion()}
        {currentStep === "results" && renderResults()}
      </main>
      <Footer />
    </div>
  );
}