const [plantData, setPlantData] = useState([]);

useEffect(() => {
  Papa.parse(CSV_URL, {
    download: true,
    header: true,
    complete: (result) => {
      setPlantData(result.data);
    },
  });
}, []);
