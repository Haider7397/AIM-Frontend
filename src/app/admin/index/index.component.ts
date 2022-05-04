import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EChartsOption } from 'echarts';
import { SidebarService } from '../../services/sidebar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

    public sidebarVisible: boolean = true;
    public isResizing: boolean = false;
    public visitorsOptions: EChartsOption = {};
    public visitsOptions: EChartsOption = {};
    public earningOptions: EChartsOption = {};
    public salesOptions: EChartsOption = {};
    public visitsAreaOptions: EChartsOption = {};
    public LikesOptions: EChartsOption = {};
    public stackedBarChart: EChartsOption = {};
    public dataManagedBarChart: EChartsOption = {};

    public earningOptionsSeries: Array<number> = [1, 4, 1, 3, 7, 1];
    public earnings: string = '$' + (this.earningOptionsSeries.reduce((a, b) => a + b, 0) * 1000).toLocaleString();
    public salesOptionsSeries: Array<number> = [1, 4, 2, 3, 6, 2];
    public sales: string = '$' + (this.salesOptionsSeries.reduce((a, b) => a + b, 0) * 10000).toLocaleString();
    public visitsAreaOptionsSeries: Array<number> = [1, 4, 2, 3, 1, 5];
    public visits: number = this.visitsAreaOptionsSeries.reduce((a, b) => a + b, 0);
    public LikesOptionsSeries: Array<number> = [1, 3, 5, 1, 4, 2];
    public likes: number = this.LikesOptionsSeries.reduce((a, b) => a + b, 0);

    public interval:any = {};

    constructor(private activatedRoute: ActivatedRoute, private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private toastr: ToastrService) {
        this.visitorsOptions = this.loadLinEChartsOptions([3, 5, 1, 6, 5, 4, 8, 3], "#49c5b6");
        this.visitsOptions = this.loadLinEChartsOptions([4, 6, 3, 2, 5, 6, 5, 4], "#f4516c");
        this.earningOptions = this.loadLineAreaChartOptions([1, 4, 1, 3, 7, 1], "#f79647", "#fac091");
        this.salesOptions = this.loadLineAreaChartOptions([1, 4, 2, 3, 6, 2], "#604a7b", "#a092b0");
        this.visitsAreaOptions = this.loadLineAreaChartOptions([1, 4, 2, 3, 1, 5], "#4aacc5", "#92cddc");
        this.LikesOptions = this.loadLineAreaChartOptions([1, 3, 5, 1, 4, 2], "#4f81bc", "#95b3d7");
        this.dataManagedBarChart = this.getDataManagedChartOptions();
    }

    ngOnInit() {
        let that = this;
        setTimeout(function () {
            that.showToastr();
        }, 1000);
        this.chartIntervals();
    }

    ngOnDestroy(){
        if (this.interval){
            clearInterval(this.interval);
        }
    }

    showToastr() {
        this.toastr.info('Hallo, willkommen beim AIM-Dashboard.', undefined, {
            closeButton: true,
            positionClass: 'toast-top-right'
        });
    }

    chartIntervals(){
        let that = this;
        this.interval = setInterval(function(){
            that.earningOptionsSeries.shift();
            let rand = Math.floor(Math.random() * 11);
            if (!rand){
                rand = 1;
            }
            that.earningOptionsSeries.push(rand);
            that.earningOptions = that.loadLineAreaChartOptions(that.earningOptionsSeries, "#f79647", "#fac091");
            that.earnings = '$' + (that.earningOptionsSeries.reduce((a, b) => a + b, 0) * 1000).toLocaleString();


            that.salesOptionsSeries.shift();
            rand = Math.floor(Math.random() * 11);
            if (!rand) {
                rand = 1;
            }
            that.salesOptionsSeries.push(rand);
            that.salesOptions = that.loadLineAreaChartOptions(that.salesOptionsSeries, "#604a7b", "#a092b0");
            that.sales = '$' + (that.salesOptionsSeries.reduce((a, b) => a + b, 0) * 10000).toLocaleString();

            that.visitsAreaOptionsSeries.shift();
            rand = Math.floor(Math.random() * 11);
            if (!rand) {
                rand = 1;
            }
            that.visitsAreaOptionsSeries.push(rand);
            that.visits += rand;
            that.visitsAreaOptions = that.loadLineAreaChartOptions(that.visitsAreaOptionsSeries, "#4aacc5", "#92cddc");

            that.LikesOptionsSeries.shift();
            rand = Math.floor(Math.random() * 11);
            if (!rand) {
                rand = 1;
            }
            that.LikesOptionsSeries.push(rand);
            that.likes += rand;
            that.LikesOptions = that.loadLineAreaChartOptions(that.LikesOptionsSeries, "#4f81bc", "#95b3d7");
            that.cdr.markForCheck();
        },3000);

    }

    toggleFullWidth() {
        this.isResizing = true;
        this.sidebarService.toggle();
        this.sidebarVisible = this.sidebarService.getStatus();
        let that = this;
        setTimeout(function () {
            that.isResizing = false;
            that.cdr.detectChanges();
        }, 400);
    }

    loadLinEChartsOptions(data, color) {
        let chartOption: EChartsOption;
        let xAxisData: Array<any> = new Array<any>();

        data.forEach(element => {
            xAxisData.push("");
        });

        return chartOption = {
            xAxis: {
                type: 'category',
                show: false,
                data: xAxisData,
                boundaryGap: false,
            },
            yAxis: {
                type: 'value',
                show: false
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>' + params[0].value;
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: '0%',
                containLabel: false
            },
            series: [{
                data: data,
                type: 'line',
                showSymbol: false,
                symbolSize: 1,
                lineStyle: {
                    color: color,
                    width: 1
                }
            }]
        };
    }

    loadLineAreaChartOptions(data, color, areaColor) {
        let chartOption: EChartsOption;
        let xAxisData: Array<any> = new Array<any>();

        data.forEach(element => {
            xAxisData.push("");
        });

        return chartOption = {
            xAxis: {
                type: 'category',
                show: false,
                data: xAxisData,
                boundaryGap: false,
            },
            yAxis: {
                type: 'value',
                show: false,
                min: 1
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>' + params[0].value;
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: '0%',
                containLabel: false
            },
            series: [{
                data: data,
                type: 'line',
                showSymbol: false,
                symbolSize: 1,
                lineStyle: {
                    color: color,
                    width: 1
                },
                areaStyle: {
                    color: areaColor
                }
            }]
        };
    }


    getDataManagedChartOptions() {
        let options: any = {
            tooltip: {
                trigger: 'item',
            },
            grid: {
                borderWidth: 0,
                y: 80,
                y2: 60
            },
            xAxis: [
                {
                    type: 'category',
                    show: false,
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {

                    type: 'bar',
                    stack: 'Gedgets',
                    data: [2, 0, 5, 0, 4, 0, 8, 0, 3, 0, 9, 0, 1, 0, 5],
                    itemStyle: {
                        color: '#7460ee'
                    },
                    barWidth: '5px'
                },
                {

                    type: 'bar',
                    stack: 'Gedgets',
                    data: [0, -5, 0, -1, 0, -9, 0, -3, 0, -8, 0, -4, 0, -5, 0],
                    itemStyle: {
                        color: '#afc979'
                    },
                    barWidth: '5px'
                }
            ]
        };

        return options;
    }
}
