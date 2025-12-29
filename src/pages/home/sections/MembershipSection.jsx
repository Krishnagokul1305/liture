import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Animated } from "../../../components/Animated";
import { container, fadeMove } from "../../../utils/animations";
import { getAllMembershipPlans } from "../../../services/membership.service";
import { useQuery } from "@tanstack/react-query";
import MembershipSkeleton from "../../../components/skeletons/MembershipSkeleton";
import { ErrorState } from "../../../components/ErrorState";
import Modal from "../../../components/Modal";
import MembershipRegistrationForm from "../../../components/forms/MemberRegistrationForm";

export default function MembershipSection() {
  const {
    data: plans,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["membership-plans"],
    queryFn: getAllMembershipPlans,
  });

  return (
    <section
      className="min-h-[80vh] py-12 md:py-24 px-6 md:px-4 lg:px-8"
      id="membership"
    >
      <div className="mx-auto max-w-7xl">
        <Animated
          variants={fadeMove("up", 40, 0)}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Become a <span className="text-primary">Member</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Become a Liture EdTech member and enjoy webinars, course discounts,
            career counselling, internship priority, certificates, and early
            access to new programs.
          </p>
        </Animated>

        <motion.div
          key={isLoading ? "loading" : "loaded"}
          variants={container(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center"
        >
          {isLoading &&
            Array.from({ length: 3 }).map((_, i) => (
              <motion.div key={i} variants={fadeMove("up", 40, i * 0.1)}>
                <MembershipSkeleton />
              </motion.div>
            ))}

          {isError && (
            <div className="col-span-full w-full flex justify-center">
              <ErrorState />
            </div>
          )}

          {plans?.map((plan, index) => {
            const isPopular = index === 1;
            return (
              <motion.div
                key={plan.name}
                variants={fadeMove("up", 40, isPopular ? 0.15 : 0)}
              >
                <Card
                  className={`relative overflow-hidden rounded-lg transition-all ${
                    isPopular
                      ? "bg-primary text-white border-0 shadow-2xl md:scale-105 lg:scale-110"
                      : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <CardHeader className="pb-3 md:pb-6">
                    <CardTitle
                      className={`text-2xl font-bold ${
                        isPopular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </CardTitle>

                    <CardDescription
                      className={`text-sm leading-relaxed mt-2 ${
                        isPopular ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.benefits?.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check
                            className={`h-5 w-5 mt-0.5 ${
                              isPopular ? "text-white" : "text-gray-900"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              isPopular ? "text-blue-50" : "text-gray-700"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Modal
                      title="Register Memberships"
                      description={`Join the ${plan.name} plan`}
                      Trigger={
                        <Button
                          className={`group relative w-full py-6 rounded-lg font-medium mt-10
                  overflow-hidden flex items-center justify-center gap-2
                  ${
                    isPopular
                      ? "bg-white text-primary hover:bg-red-50"
                      : "bg-primary text-white"
                  }`}
                        >
                          <span className="relative z-10">Get Started</span>
                          <ArrowRight className="relative z-10 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      }
                    >
                      <MembershipRegistrationForm membershipId={plan._id} />
                    </Modal>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
