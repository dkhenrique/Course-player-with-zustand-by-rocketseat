import { Header } from "../components/Header"
import { Video } from "../components/Video"
import { Module } from "../components/Module"
import { MessageCircle } from "lucide-react"
import { useEffect } from "react"
import { useCurrentLesson, useStore } from "../zustand-store"

export function Player() {
  const { course, load, isLoading } = useStore()
  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson])

  function ModuleSkeleton() {
    return (
      <div className="group animate-pulse">
        <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
          <div className="w-10 h-10 rounded-full bg-zinc-950" />
          <div className="flex flex-col gap-1 text-left flex-1">
            <div className="h-4 bg-zinc-700 rounded w-3/4"></div>{" "}
            <div className="h-3 bg-zinc-700 rounded w-1/4"></div>{" "}
          </div>
        </div>

        {/* Esqueleto do Conteúdo (Aulas) */}
        <div className="relative flex flex-col gap-4 p-6">
          {/* Aula fantasma 1 */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-zinc-700" />
            <div className="flex-1 h-4 bg-zinc-700 rounded" />
            <div className="w-10 h-4 bg-zinc-700 rounded" />   {" "}
          </div>
          {/* Aula fantasma 2 */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-zinc-700" />
            <div className="flex-1 h-4 bg-zinc-700 rounded" />
            <div className="w-10 h-4 bg-zinc-700 rounded" />   {" "}
          </div>
          {/* Aula fantasma 3 */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-zinc-700" />
            <div className="flex-1 h-4 bg-zinc-700 rounded" />
            <div className="w-10 h-4 bg-zinc-700 rounded" />   {" "}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar Feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="absolute top-0 bottom-0 right-0 w-80 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900">
            {isLoading ? (
              <>
                <ModuleSkeleton />
                <ModuleSkeleton />
                <ModuleSkeleton />
              </>
            ) : (
              course?.modules &&
              course?.modules.map((module, index) => {
                return (
                  <Module
                    key={module.id}
                    title={module.title}
                    amountOfLessons={module.lessons.length}
                    moduleIndex={index}
                  />
                )
              })
            )}
          </aside>
        </main>
      </div>
    </div>
  )
}
