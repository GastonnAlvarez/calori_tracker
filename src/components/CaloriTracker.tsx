import { useMemo } from "react"
import CaloriesDisplay from "./CaloriesDisplay"
import { useActivity } from "../hooks/useActivity"

export default function CaloriTracker() {
    const { state } = useActivity()
    // Contadores
    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [state.activities])
    const caloriesBurned = useMemo(() => state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [state.activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [state.activities])

    return (
        <>
            <div className="font-black text-4xl text-white text-center">Resumen de Calorias:</div>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CaloriesDisplay
                    calories={caloriesConsumed}
                    text='Consumidas'
                />
                <CaloriesDisplay
                    calories={netCalories}
                    text='Diferencia'
                />
                <CaloriesDisplay
                    calories={caloriesBurned}
                    text='Ejercicio'
                />
            </div>
        </>
    )
}
