package com.cpthree;

import android.graphics.Color;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.github.mikephil.charting.charts.BarChart;
import com.github.mikephil.charting.data.BarData;
import com.github.mikephil.charting.data.BarDataSet;
import com.github.mikephil.charting.data.BarEntry;

import java.util.ArrayList;

/**
 * Created by Administrator on 2015/11/6.
 */
public class MPBarChartManager extends MPBarLineChartManager {
    private String CLASS_NAME="MPBarChart";
    @Override
    public String getName() {
        return this.CLASS_NAME;
    }

    @Override
    protected BarChart createViewInstance(ThemedReactContext reactContext) {
        BarChart chart=new BarChart(reactContext);

        return  chart;
    }

    //{XValues:[],YValues:[{Data:[],Label:""},{}]}
    @ReactProp(name="data")
    public void setData(BarChart chart,ReadableMap rm){

        ReadableArray xArray=rm.getArray("xValues");
        ArrayList<String> xVals=new ArrayList<String>();
        for(int m=0;m<xArray.size();m++){
            xVals.add(xArray.getString(m));
        }
        ReadableArray ra=rm.getArray("yValues");
        BarData barData=new BarData(xVals);
        for(int i=0;i<ra.size();i++){
            ReadableMap map=ra.getMap(i);
            ReadableArray data=map.getArray("data");
            String label=map.getString("label");
            float[] vals=new float[data.size()];
            ArrayList<BarEntry> entries=new ArrayList<BarEntry>();
            for (int j=0;j<data.size();j++){
                vals[j]=(float)data.getDouble(j);
                BarEntry be=new BarEntry((float)data.getDouble(j),j);
                entries.add(be);
            }
            /*BarEntry be=new BarEntry(vals,i);
            entries.add(be);*/
            BarDataSet dataSet=new BarDataSet(entries,label);
            ReadableMap config= map.getMap("config");
            if(config.hasKey("colors")){
                ReadableArray colorsArray = config.getArray("colors");
                ArrayList<Integer> colors = new ArrayList<>();
                for(int c = 0; c < colorsArray.size(); c++){
                    colors.add(Color.parseColor(colorsArray.getString(c)));
                }
                dataSet.setColors(colors);
            }else
            if(config.hasKey("color")) {
                int[] colors=new int[]{Color.parseColor(config.getString("color"))};
                dataSet.setColors(colors);
            }
            barData.addDataSet(dataSet);

        }
        chart.setData(barData);
        chart.invalidate();
    }
}
