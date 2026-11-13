const useMenu = create((set) => ({
  isOpen: false,
  toggle: () => set((s) => s.isOpen = !s.isOpen),
}));


// const useBox = create((set) => ({
//   count: 10,
//   double: () => set((s) => ({count: s.count * 2})),
// }));


const useBox = create((set) => ({
    name: 'Belle Isle',
    rename: (newName) => set({name: newName})
}))

const useSpots = create((set) => ({
    spots: ['Belle Islt'],
    addSpot: (newSpot) => set((s) => ({spots: [...s.spots, newSpot]}))
}))


const useRiders = create((set) => ({
    riders: [],
    addRider: (newRider) => set((s) => ({riders: [...s.riders, newRider]}))
}))

const useRiders = create((set) => ({
    riders: [],
    addRider: (newRider) => set((s) => ({riders: [...s.riders, newRider]}))
}))

function RiderList() {
  // line 1: grab riders
  const riders = useRiders((s) => s.riders)
  // line 2: grab addRider
  const addRider = useRiders((s) => s.addRider)
  return <p>{riders.length} riders</p>;
}



const useMenu = create((set) => ({
    isOpen: false,
    toggle: () => set((s) => ({isOpen: !s.isOpen}))
}))

function MyComponent(){
    const isOpen = useMenu((s) => s.isOpen);
    const toggle = useMenu((s) => s.toggle);

    return(
        <>
            <button onClick={toggle}>{isOpen ? 'store is open' : 'store is closed'}</button>
        </>
    )
}

