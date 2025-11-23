interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  detail: string;
  align: "left" | "right";
}

const timelineEvents: TimelineEvent[] = [
  { id: "01", title: "Kongu Engineering College - Erode", date: "March 18, 2023", detail: "20 Teams", align: "right" },
  { id: "02", title: "Galaxy _ IRTT college of Engneering - Erode", date: "May 10, 2023", detail: "30+ Staffs", align: "left" },
  { id: "03", title: "GDG hackathon", date: "September 19,20, 2024", detail: "50+ students", align: "right" },
  { id: "04", title: "Karpagam Engineering college - Covai", date: "October 5, 2024", detail: "100+ students", align: "left" },
  { id: "05", title: "Sri Venkateswaraa College of Technology", date: "August 21, 2024", detail: "100+ students", align: "right" },
  { id: "06", title: "SSM College of Engineering - Kumarapalayam", date: "March 18, 2025", detail: "Guest lecture / Workshop", align: "left" },
  { id: "07", title: "Alameen Engineering College - Erode", date: "TBD", detail: "Awareness Program", align: "right" },
];

export function Timeline() {
  return (
    <>
      <style>{`
        .timeline-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .timeline-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section id="timeline" className="relative bg-background py-24" data-testid="section-timeline">
        <div className="relative z-10 px-6 lg:px-32 flex flex-col items-center justify-center pb-20 text-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">Time Line</h1>
          <div className="w-32 h-1 bg-cyan mx-auto mb-4" />
          <p className="mt-5 max-w-2xl text-center text-muted-foreground text-lg">
            Short description about the talk or the awareness programs
          </p>

          <div className="w-full max-w-6xl">
            <div className="w-full max-h-[65vh] overflow-y-auto mt-10 lg:mt-20 timeline-scroll">
              {timelineEvents.map((event, idx) => (
                <div key={event.id + idx} className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mb-8">
                  {event.align === "left" ? (
                    <>
                      <div className="md:w-1/3 h-auto text-right pr-4 md:pr-0">
                        <h2 className="text-xl md:text-lg font-bold capitalize mb-3">
                          {event.title}
                        </h2>
                        <p className="font-light text-sm text-muted-foreground">{event.date}</p>
                        <p className="font-light text-sm text-muted-foreground">{event.detail}</p>
                      </div>

                      <div className="text-center relative md:w-1/6">
                        <h1 className="text-6xl lg:text-5xl md:text-4xl font-semibold text-primary">
                          {event.id}
                        </h1>
                        <div className="w-[2px] h-[100px] bg-gray-700 absolute left-1/2 -translate-x-1/2" />
                      </div>

                      <div className="md:w-1/3 h-auto invisible md:invisible" />
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/3 h-auto invisible md:invisible" />

                      <div className="text-center relative md:w-1/6">
                        <h1 className="text-6xl lg:text-5xl md:text-4xl font-semibold text-primary">
                          {event.id}
                        </h1>
                        <div className="w-[2px] h-[100px] bg-gray-700 absolute left-1/2 -translate-x-1/2" />
                      </div>

                      <div className="md:w-1/3 h-auto text-left pl-4 md:pl-0">
                        <h2 className="text-xl md:text-lg font-bold capitalize mb-3">
                          {event.title}
                        </h2>
                        <p className="font-light text-sm text-muted-foreground">{event.date}</p>
                        <p className="font-light text-sm text-muted-foreground">{event.detail}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
