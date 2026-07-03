import { CIISSEvent, PastEvent, ContactInfo } from "./types";

// ── Current / Upcoming Event ──────────────────────────────────────
export const CURRENT_EVENT: CIISSEvent = {
  id: "islamic-mahfil-week-2026",
  slug: "islamic-mahfil-week-2026",
  title: "Islamic Mahfil Week 2026",
  tagline: "A Grand Gathering of Faith, Knowledge & Brotherhood",
  date: "July 6–9, 2026",
  location: "CUET Campus",
  description:
    "The flagship annual event of CUET Islamic Ilm Seeker Society — a multi-day series featuring quiz competitions, Sunnah presentations, an Islamic book fair, and culminating in the Grand Mahfil with renowned Islamic scholar Professor Mokhter Ahmad.",
  image: "/Islamic Mahfil.png",
  isUpcoming: true,
  isFeatured: true,
  segments: [
    {
      id: "quiz-competition-male",
      slug: "quiz-competition-male",
      title: "Quiz Competition (Male)",
      date: "Jul 6–9, 2026",
      image: "/quiz_male.png",
      description:
        "Represent your hall and compete to become the 'Hall Champion' or the ultimate 'Champion of Champions' in this thrilling Islamic Quiz Competition.",
      details: [
        "Hall Round (July 6): 60 MCQs in 30 minutes at respective hall dining/study rooms.",
        "Grand Finale (July 9, 4:30 PM): Hall champions compete on stage at the Central Auditorium, with 5 lifelines/helpers from their hall.",
        "Syllabus: Introduction to Quran & Hadith, Iman & Aqeedah, Ibadah & Fiqh, Seerah of Prophet & Salafs, Islamic History, Contemporary Muslim World, and basics.",
        "Eligibility: Regular male students of CUET from batches 21, 22, 23, 24, and 25.",
        "Deadline: Register by July 5, 2026.",
      ],
      registrationUrl: "https://forms.gle/TsNoksCQqNT8Tq9f6",
    },
    {
      id: "quiz-competition-female",
      slug: "quiz-competition-female",
      title: "Quiz Competition (Female)",
      date: "Jul 8, 2026",
      image: "/quiz_female.png",
      description:
        "An excellent opportunity for female students to engage in the pursuit of Islamic knowledge through a dedicated Quiz Competition show.",
      details: [
        "Format: 60 MCQs in 30 minutes.",
        "Venue: To be announced soon.",
        "Syllabus: Introduction to Quran & Hadith, Iman & Aqeedah, Ibadah & Fiqh, Seerah of Prophet & Salafs, Islamic History, Contemporary Muslim World, and basics.",
        "Eligibility: Regular female students of CUET from batches 21, 22, 23, 24, and 25.",
        "Deadline: Register by July 5, 2026.",
      ],
      registrationUrl: "https://forms.gle/RfX8GuZpcaCQxx6S9",
    },
    {
      id: "sunnah-presentation",
      slug: "sunnah-presentation",
      title: "Sunnah Presentation",
      date: "Jul 8, 2026",
      image: "/sunnah-presentation.jpg",
      description:
        "Dive into the pristine lifestyle of Prophet Muhammad (PBUH) through an interactive, visual, and thought-provoking exhibition. Connecting historical tradition with modern daily life.",
      details: [
        "Live visual galleries and interactive booths",
        "Student-led presentations on physical, environmental, and ethical aspects of Sunnah",
        "Covers leadership, daily hygiene, and social etiquette",
        "Inspiring engineering minds to adopt prophetic values",
      ],
    },
    {
      id: "book-fair",
      slug: "book-fair",
      title: "Book Fair",
      date: "Jul 8, 2026",
      description:
        "Feed your intellect and enrich your soul at the campus-wide Islamic Book Fair. Prominent Islamic publishing houses right at the heart of CUET.",
      details: [
        "Genres: Tafseer, Seerah, Islamic Golden Age history, spiritual self-development, Islam & Science",
        "Exclusive student-friendly discounts on all titles",
        "Build your personal library with authentic knowledge",
      ],
    },
    {
      id: "mahfil",
      slug: "mahfil",
      title: "Grand Mahfil",
      date: "Jul 9, 2026",
      description:
        "The crown jewel and spiritual culmination of the entire event series. The Grand Mahfil gathers the entire CUET community for an evening of profound spiritual rejuvenation.",
      details: [
        "Keynote by renowned scholar Professor Mokhter Ahmad",
        "Quran-and-Hadith-grounded lectures for Muslim youth & tech professionals",
        "Heart-softening reminders and collective worship",
        "Open to all CUET students, faculty, and staff",
      ],
      registrationUrl: "#",
    },
    {
      id: "prize-giving",
      slug: "prize-giving",
      title: "Prize Giving Ceremony",
      date: "Jul 9, 2026",
      description:
        "Celebrating the brightest minds. Awards presented for QuranInCUET 2026, Seerah Competition 2.0, and Quiz Competition 2026.",
      details: [
        "QuranInCUET 2026 winners",
        "Seerah Competition 2.0 winners",
        "Quiz Competition 2026 winners",
      ],
    },
  ],
};

// ── Past Events ───────────────────────────────────────────────────
export const PAST_EVENTS: PastEvent[] = [
  {
    id: "seerah-2023",
    title: "Seerah Competition 2023",
    date: "Dec 1, 2023",
    location: "CUET Campus",
    description:
      "Campus-wide competition on the life and legacy of Prophet Muhammad (ﷺ).",
  },
  {
    id: "grand-iftar-1445",
    title: "Grand Iftar Mahfil (1445 Hijri)",
    date: "Mar 12, 2024",
    location: "CUET Campus",
    description:
      "A massive collective fasting-breaking gathering for students and staff.",
  },
  {
    id: "islamic-week-2025",
    title: "Islamic Week 2025",
    date: "Feb 20, 2025",
    location: "CUET Venue",
    description:
      "A week-long series of seminars, awareness campaigns, and youth lectures.",
  },
  {
    id: "seerah-2-0",
    title: "Seerah Competition 2.0",
    date: "Mar 7, 2025",
    location: "CUET Campus",
    description:
      "High-engagement quiz and assessment series centered on Prophet's (ﷺ) biography.",
  },
  {
    id: "quran-in-cuet",
    title: "Quran In CUET Campaign",
    date: "Dec 4, 2025",
    location: "CUET Campus",
    description:
      "Major campus-wide distribution of Qur'an and relevant competitions.",
  },
  {
    id: "iftar-2026",
    title: "Iftar with CIISS 2026",
    date: "Feb 18, 2026",
    location: "CUET Campus",
    description:
      "Spiritual gathering leading into the blessed month of Ramadan.",
  },
];

// ── Contact Info ──────────────────────────────────────────────────
export const CONTACT_INFO: ContactInfo = {
  address: "Kaptai Road, Chittagong, Bangladesh, 4349",
  phone: "01881-277639",
  facebook: "https://www.facebook.com/CUETIslamicIlmSeekerSociety",
  messenger: "https://m.me/CUETIslamicIlmSeekerSociety",
};

// ── Society Info ──────────────────────────────────────────────────
export const SOCIETY_INFO = {
  name: "CUET Islamic Ilm Seeker Society",
  acronym: "CIISS",
  fullName: "CUET Islamic Ilm Seeker Society (CIISS)",
  mission:
    "To foster a campus environment where rigorous engineering and technological education goes hand-in-hand with authentic Islamic values, moral uprightness, and spiritual development.",
  vision:
    "Transforming today's engineering students into tomorrow's integrity-driven leaders through the light of Islamic knowledge.",
  about:
    "The CUET Islamic Ilm Seeker Society (CIISS) is a prominent, independent, non-profit, student-led spiritual and intellectual platform operating within the Chittagong University of Engineering and Technology (CUET). It stands as a rapidly growing community dedicated to transforming today's engineering students into tomorrow's integrity-driven leaders.",
};
