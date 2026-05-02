import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * 서울불교대학원대학교 히어로 섹션
 * 
 * 디자인 철학: 명상적 미니멀리즘
 * - 깊은 남색 배경(#0F172A)으로 명상의 깊이와 신뢰감 표현
 * - 연꽃 배경 이미지로 불교 전통 상징화
 * - 골드 액센트(#D4AF37)로 고급스러움과 정신성 표현
 * - 비대칭 레이아웃으로 시각적 흥미 유발
 * - 부드러운 애니메이션으로 명상적 분위기 강화
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 히어로 섹션 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 배경 이미지 - 연꽃 */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663617230658/EhmoVrZfc5kRfm5Mj9AkrN/lotus-hero-bg-hgGH8Nn4LpHkfc4Hby2JAB.webp"
            alt="연꽃 배경"
            className="w-full h-full object-cover"
          />
          {/* 그라데이션 오버레이 - 텍스트 가독성 확보 */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 상단 태그 */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-accent">
                  불교적 통찰 × 현대 과학
                </span>
              </div>
            </motion.div>

            {/* 메인 제목 */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block mb-2">붓다의 가르침을</span>
              <span className="block text-accent">현대에 전하다</span>
            </motion.h1>

            {/* 부제목 */}
            <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed"
          >
            명상과 심리치료의 경계를 넘어, 정신과학의 새로운 지평을 열다. 서울불교대학원대학교에서
            전문가의 길을 시작하세요.
          </motion.p>

            {/* CTA 버튼들 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
              >
                입학안내 보기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold text-base px-8 py-6 rounded-lg transition-all duration-300"
              >
                학과소개
              </Button>
            </motion.div>

            {/* 추가 정보 */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-foreground/20"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-accent text-2xl font-bold">3개</p>
                  <p className="text-foreground/70 text-sm mt-1">전문 학과</p>
                </div>
                <div>
                  <p className="text-accent text-2xl font-bold">30+</p>
                  <p className="text-foreground/70 text-sm mt-1">경력 교수진</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-accent text-2xl font-bold">서울</p>
                  <p className="text-foreground/70 text-sm mt-1">금천구 위치</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          variants={scrollIndicatorVariants}
          animate="animate"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-foreground/60">스크롤하여 더보기</span>
            <ChevronDown className="w-6 h-6 text-accent" />
          </div>
        </motion.div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" } as any}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              서울불교대학원대학교에 대해
            </h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              서울불교대학원대학교는 불교의 정신적 가치와 현대 과학을 결합하여,
              명상, 심리치료, 상담 분야의 전문가를 양성하는 교육기관입니다.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              우리는 단순한 학문의 전수를 넘어, 마음의 평온함과 정신의 성장을 추구하는
              학생들의 여정을 함께합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 구분선 */}
      <div className="h-1 bg-gradient-to-r from-background via-accent to-background"></div>

      {/* 연락처 섹션 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" } as any}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">전화상담</h3>
              <p className="text-lg text-foreground/80">02-890-2800</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">이메일</h3>
              <p className="text-lg text-foreground/80">sub@sub.ac.kr</p>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-xl font-bold text-accent mb-3">주소</h3>
              <p className="text-lg text-foreground/80">
                서울특별시 금천구 독산로70길 8 (우편번호: 08559)
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
