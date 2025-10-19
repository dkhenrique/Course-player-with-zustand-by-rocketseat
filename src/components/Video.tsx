import ReactPlayer from "react-player"
import { UseAppSelector } from "../store"
import { useDispatch } from "react-redux"
import { next } from "../store/slices/player"

export function Video() {
  const dispatch = useDispatch()

  const lesson = UseAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]
    return currentLesson
  })

  function handlePlayNextLesson() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayNextLesson}
        src={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
