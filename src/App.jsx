import React from "react";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin, GraduationCap, PenTool, Layers, MonitorSmartphone, BookOpenText, Mail, ArrowRight, Trophy, CheckCircle2, Star, Camera, MessageSquareHeart } from "lucide-react";
import { Button } from "./components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card.jsx";
import { Input, Textarea } from "./components/ui/input.jsx";
import { Badge } from "./components/ui/badge.jsx";
import { Separator } from "./components/ui/separator.jsx";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Title = ({ kicker, title, desc, center = false }) => (
  <div className={`mb-10 ${center ? "text-center" : ""}`}>
    {kicker && (<p className="uppercase tracking-widest text-xs text-muted-foreground mb-2">{kicker}</p>)}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
    {desc && <p className="mt-3 text-muted-foreground text-base md:text-lg">{desc}</p>}
  </div>
);

const NavLink = ({ href, children }) => (<a href={href} className="hover:opacity-80 transition-opacity">{children}</a>);

const courses = [
  { icon: <GraduationCap className="w-6 h-6" />, title: "국비지원교육", desc: "내일배움카드 등 정부 지원으로 부담을 낮춘 실무 중심 커리큘럼." },
  { icon: <MonitorSmartphone className="w-6 h-6" />, title: "일반교육", desc: "취미부터 취업까지, 수준별 맞춤 1:1 코칭과 소그룹 수업." },
  { icon: <Trophy className="w-6 h-6" />, title: "ITQ 마스터", desc: "한글/파워포인트/엑셀 완전 대비. 단기간 고득점 전략." },
  { icon: <Layers className="w-6 h-6" />, title: "컴활 1·2급", desc: "필기+실기 통합 대비, 실전형 문제 풀이와 단축키 습관화." },
  { icon: <PenTool className="w-6 h-6" />, title: "AutoCAD", desc: "도면 표준부터 실무 팁까지, 건축·기계 CAD 핵심 스킬." },
  { icon: <PenTool className="w-6 h-6" />, title: "GTQ 포토샵", desc: "합격 컷 분석과 유형별 작례로 한 번에 합격." },
  { icon: <PenTool className="w-6 h-6" />, title: "일러스트레이터", desc: "브랜딩 로고, 인포그래픽, 인쇄 실무까지 완주." },
  { icon: <BookOpenText className="w-6 h-6" />, title: "인디자인", desc: "출판·편집 디자인 실무 레이아웃 감각 트레이닝." },
  { icon: <Layers className="w-6 h-6" />, title: "컴퓨터그래픽스운용기능사", desc: "NCS 기준 이론+실습, 포트폴리오까지 연결." },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <div className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-50">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">W</div>
            <div>
              <div className="text-sm leading-tight font-semibold">웰컴디자인컴퓨터학원</div>
              <div className="text-xs text-muted-foreground">하양 최초, 27년 디자인 교육 노하우</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink href="#about">학원소개</NavLink>
            <NavLink href="#courses">강의안내</NavLink>
            <NavLink href="#admission">수강신청</NavLink>
            <NavLink href="#notice">공지/소식</NavLink>
            <NavLink href="#contact">오시는 길</NavLink>
            <NavLink href="#online">온라인 강의</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Badge className="hidden sm:inline-flex" variant="secondary">
              <Clock className="w-3.5 h-3.5 mr-1" /> 오후 2:00 ~ 9:30
            </Badge>
            <Button asChild className="rounded-2xl">
              <a href="tel:010-2809-6699"><Phone className="w-4 h-4 mr-2"/> 010-2809-6699</a>
            </Button>
          </div>
        </Section>
      </div>

      <Section className="pt-10 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              하양 최초, 27년 디자인 교육 노하우! <br />
              <span className="text-slate-600">IT 자격증부터 디자인 전문가까지</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              경북 경산시 하양읍 문화로 6 — 웰컴디자인컴퓨터학원에서 당신의 가능성을 엽니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#admission">지금 수강 상담하기 <ArrowRight className="w-4 h-4 ml-1"/></a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl">
                <a href="#courses">강의 살펴보기</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4"/> 1:1 맞춤 피드백
              <CheckCircle2 className="w-4 h-4"/> 실무형 커리큘럼
              <CheckCircle2 className="w-4 h-4"/> 자격증 단기 합격 전략
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle>빠른 안내</CardTitle>
                <CardDescription>연락/운영시간/위치</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-3"><Phone className="w-4 h-4"/> 010-2809-6699</div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4"/> 오후 2:00 ~ 9:30</div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4"/> 경북 경산시 하양읍 문화로 6</div>
                <iframe title="map" className="w-full h-56 rounded-xl border" loading="lazy"
                  src="https://www.google.com/maps?q=%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%82%B0%EC%8B%9C%20%ED%95%98%EC%96%91%EC%9D%8D%20%EB%AC%B8%ED%99%94%EB%A1%9C%206&output=embed"></iframe>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section id="about" className="py-12">
        <Title kicker="ABOUT" title="당신의 성장에 집중하는 디자인·IT 교육 공간" desc="IT 자격증 기초부터 디자인 전문가 과정까지, 27년 노하우로 학습 동선을 설계합니다." />
        <div className="grid md:grid-cols-3 gap-5">
          {["개인별 수준진단과 맞춤 커리큘럼", "프로 출신 강사진의 실무 피드백", "포트폴리오·자격증·취업까지 동행"].map((t, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6 text-slate-700 flex items-start gap-3">
                <Star className="w-5 h-5 mt-1"/> <span>{t}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="courses" className="py-12">
        <Title kicker="COURSES" title="강의 안내" desc="자격증 합격과 실무 실력을 동시에." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => (
            <Card key={c.title} className="rounded-2xl">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-slate-600">{c.icon}<span className="font-semibold">{c.title}</span></div>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-slate-600">{c.desc}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-sm text-muted-foreground">* 상세 커리큘럼과 수업료는 상담 시 안내드립니다.</div>
      </Section>

      <Section id="admission" className="py-12">
        <Title kicker="ADMISSION" title="수강 신청" desc="간단히 남겨주시면 빠르게 연락드립니다." />
        <Card className="rounded-2xl">
          <CardContent className="p-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">이름</label>
                <Input placeholder="홍길동" />
              </div>
              <div>
                <label className="text-sm font-medium">연락처</label>
                <Input type="tel" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="text-sm font-medium">관심 과정</label>
                <Input placeholder="예: 컴활 2급, GTQ 포토샵" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">문의 내용</label>
                <Textarea placeholder="수강 희망 일정, 현재 수준 등을 적어주세요." rows={7} />
              </div>
              <div className="flex gap-3">
                <Button className="rounded-2xl w-full"><Mail className="w-4 h-4 mr-1"/> 문의 보내기</Button>
                <Button asChild variant="secondary" className="rounded-2xl w-full"><a href="tel:010-2809-6699"><Phone className="w-4 h-4 mr-1"/> 전화 상담</a></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section id="notice" className="py-12">
        <Title kicker="UPDATES" title="공지사항 & 소식" desc="시험 일정, 모집 공고, 합격 소식을 전합니다." />
        <div className="grid md:grid-cols-3 gap-5">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">[예시] 9월 컴활 2급 대비 주중반 개강</CardTitle>
                <CardDescription>평일 반 / 저녁 시간대 / 소수정원</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="rounded-2xl">자세히 보기</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="gallery" className="py-12">
        <Title kicker="GALLERY" title="수강생 작업 & 클래스 스냅샷" desc="따뜻하고 아늑한 분위기, 현대적이고 심플한 결과물." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
            "https://images.unsplash.com/photo-1526483360412-f4dbaf036963",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?2",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            "https://images.unsplash.com/photo-1557800636-894a64c1696f",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          ].map((src, i) => (
            <div key={i} className="aspect-video rounded-xl overflow-hidden bg-slate-200">
              <img alt="gallery" src={`${src}&auto=format&fit=crop&w=1200&q=60`} className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-muted-foreground flex items-center gap-2"><Camera className="w-4 h-4"/> 샘플 이미지 — 실제 사진으로 교체해드릴 수 있어요.</div>
      </Section>

      <Section id="online" className="py-12">
        <Title kicker="ONLINE" title="온라인 강의" desc="원격 강의/복습 영상을 순차 제공할 수 있는 공간입니다." />
        <Card className="rounded-2xl">
          <CardContent className="p-6 grid md:grid-cols-3 gap-6">
            {["ITQ 기본기", "컴활 실기 단축키", "포토샵 빠른 퀵팁"].map((t, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">{t}</CardTitle>
                  <CardDescription>샘플 강좌 — 영상/링크로 교체</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="rounded-2xl">바로 보기</Button>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </Section>

      <Section id="reviews" className="py-12">
        <Title kicker="REVIEWS" title="수강생 후기" desc="작은 진전이 모여 자격증과 취업으로 이어집니다." />
        <div className="grid md:grid-cols-3 gap-5">
          {["기초부터 차근차근 지도해주셔서 컴활 2급 합격했습니다!", "포트폴리오 리뷰가 정말 디테일했어요.", "수업 분위기가 따뜻하고 집중이 잘 됩니다."].map((text, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6 text-slate-700">
                <MessageSquareHeart className="w-5 h-5 mb-2"/>
                {text}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" className="py-12">
        <Title kicker="CONTACT" title="오시는 길 & 문의" desc="전화 또는 아래 양식으로 문의 주세요." />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-slate-700"><Phone className="w-4 h-4"/> 010-2809-6699</div>
              <div className="flex items-center gap-2 text-slate-700"><Clock className="w-4 h-4"/> 오후 2:00 ~ 9:30</div>
              <div className="flex items-center gap-2 text-slate-700"><MapPin className="w-4 h-4"/> 경북 경산시 하양읍 문화로 6</div>
              <Separator />
              <iframe title="map2" className="w-full h-64 rounded-xl border" loading="lazy"
                src="https://www.google.com/maps?q=%EA%B2%BD%EB%B6%81%20EA%B2%경산시%20%ED%95%98%EC%96%91%EC%9D%8D%20%EB%AC%B8%ED%99%94%EB%A1%9C%206&output=embed"></iframe>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6 grid gap-4">
              <div>
                <label className="text-sm font-medium">이메일</label>
                <Input type="email" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium">문의 내용</label>
                <Textarea rows={6} placeholder="과정/시간/수강료 등 궁금한 점을 남겨주세요." />
              </div>
              <Button className="rounded-2xl">문의 보내기</Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t mt-12">
        <Section className="py-10 grid md:grid-cols-3 gap-6 text-sm text-slate-600">
          <div>
            <div className="font-semibold text-slate-800">웰컴디자인컴퓨터학원</div>
            <div className="mt-2">하양 최초, 27년 디자인 교육 노하우! IT 자격증부터 디자인 전문가까지, 당신의 가능성을 열어드립니다.</div>
          </div>
          <div>
            <div className="font-semibold text-slate-800">메뉴</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#courses">강의 안내</a></li>
              <li><a href="#admission">수강 신청</a></li>
              <li><a href="#notice">공지사항</a></li>
              <li><a href="#contact">오시는 길</a></li>
              <li><a href="#online">온라인 강의</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-800">연락처</div>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> <a href="tel:010-2809-6699">010-2809-6699</a></li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4"/> 오후 2:00 ~ 9:30</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 경북 경산시 하양읍 문화로 6</li>
            </ul>
          </div>
        </Section>
        <div className="text-center text-xs text-muted-foreground pb-8">© {new Date().getFullYear()} Welcome Design Computer Academy. All rights reserved.</div>
      </footer>
    </div>
  );
}
