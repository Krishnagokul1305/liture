import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../../../components/SearchBar";
import ListingHeaderSkeleton from "../../../components/skeletons/ListingHeaderSkeleton";
import CourseCardSkeleton from "../../../components/skeletons/CourseCardSkeleton";
import { getAllInternships } from "../../../services/internship.service";
import InternshipCard from "../../../components/InternshipCard";
import { EmptyState } from "../../../components/EmptyState";

import { Animated } from "@/components/Animated";
import { container, fadeMove } from "@/utils/animations";

function Listing() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const {
    data: internships = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["internships"],
    queryFn: getAllInternships,
    staleTime: 1000 * 60 * 5,
  });

  const showSkeleton = isLoading || isFetching;

  const filteredInternships = internships.filter((internship) =>
    internship.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {showSkeleton ? (
        <ListingHeaderSkeleton />
      ) : (
        <Animated
          variants={container(0.15)}
          className="mb-8 flex flex-col md:flex-row gap-3 items-center justify-between"
        >
          <Animated variants={fadeMove("up", 20)}>
            <p className="text-lg font-medium text-gray-900">
              We found{" "}
              <span className="text-primary">{filteredInternships.length}</span>{" "}
              internships for you
            </p>
          </Animated>

          <Animated
            variants={fadeMove("up", 20, 0.1)}
            className="w-full md:w-fit"
          >
            <SearchBar />
          </Animated>
        </Animated>
      )}

      {filteredInternships.length === 0 && !showSkeleton ? (
        <Animated variants={fadeMove("up", 30)}>
          <EmptyState />
        </Animated>
      ) : (
        <Animated
          variants={container(0.15)}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {showSkeleton
            ? Array.from({ length: 6 }).map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))
            : filteredInternships.map((internship) => (
                <Animated
                  key={internship.id || internship.title}
                  variants={fadeMove("up", 30)}
                >
                  <InternshipCard internship={internship} />
                </Animated>
              ))}
        </Animated>
      )}
    </div>
  );
}

export default Listing;
