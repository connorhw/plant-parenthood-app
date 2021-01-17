import config from '../config'

const PlantsApiService = {
    getPlants() {
        return fetch(`${config.API_ENDPOINT}/plants`)
            .then(res => 
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
            )
    },
    getPlant(plantId) {
        return fetch(`${config.API_ENDPOINT}/plants/${plantId}`)
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    postPlant(plantId, plant_name, water_day, water_week, rec_env, fert_type, when_repot, maint_level, fun_fact, fav) {
        return fetch(`${config.API_ENDPOINT}/plants`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                id: plantId,
                plant_name,
                water_day,
                water_week,
                rec_env,
                fert_type,
                when_repot,
                maint_level,
                fun_fact,
                fav,
              }),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )

    }
}

//export default PlantsApiService