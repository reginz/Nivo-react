// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/swarmplot
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { streamData } from "../data/streamData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Stream = () => {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveSwarmPlot
        data={streamData}
        groups={["group A", "group B", "group C"]}
        identity="id"
        value="price"
        valueFormat="$.2f"
        valueScale={{ type: "linear", min: 0, max: 500, reverse: false }}
        size={{
          key: "volume",
          values: [4, 20],
          sizes: [6, 20],
        }}
        forceStrength={4}
        simulationIterations={100}
        borderColor={{
          from: "color",
          modifiers: [
            ["darker", 0.6],
            ["opacity", 0.5],
          ],
        }}
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
        axisTop={{
          orient: "top",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "group if vertical, price if horizontal",
          legendPosition: "middle",
          legendOffset: -46,
        }}
        axisRight={{
          orient: "right",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "price if vertical, group if horizontal",
          legendPosition: "middle",
          legendOffset: 76,
        }}
        axisBottom={{
          orient: "bottom",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "group if vertical, price if horizontal",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "price if vertical, group if horizontal",
          legendPosition: "middle",
          legendOffset: -76,
        }}
		legends={[
			{
				anchor: "bottom-right",
				direction: "row",
				translateY: 36,
				itemCount: 4,
				itemWidth: 42,
				itemHeight: 36,
				itemsSpacing: 14,
				itemDirection: "right-to-left",
			},
		]}
		isInteractive={false}
      />
    </div>
  );
};

export default Stream;
