import { useState } from "react";
import { lessons } from "./lessons";

function App() {
  const [activeLessonId, setActiveLessonId] = useState(lessons[0].id);

  const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId);
  const ActiveLesson = activeLesson.component;

  return (
    <main>
      <nav aria-label="Lessons">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            className={`lesson-button${lesson.id === activeLessonId ? " active" : ""}`}
            onClick={() => setActiveLessonId(lesson.id)}
            type="button"
          >
            {lesson.title}
          </button>
        ))}
      </nav>

      <ActiveLesson />
    </main>
  );
}

export default App;
