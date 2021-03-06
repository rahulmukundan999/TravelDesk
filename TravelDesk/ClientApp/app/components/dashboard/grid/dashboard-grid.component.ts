import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginatorModule,MatFormFieldModule, MatButtonModule, MatSortModule, MatDialogModule, MatTableModule } from '@angular/material';
import { MatPaginator, MatSort,MatDialog } from '@angular/material';
import { RequestService } from '../../../shared/services/request.service'
import { RequestData } from '../../../shared/models/requestdata.interface';
import { RequestDialog } from '../../request/request-dialog.component';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GridService } from '../../../shared/services/grid.service';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: 'dash-grid',
    styleUrls: ['dashboard-grid.component.css'],
    templateUrl: 'dashboard-grid.component.html',
})
export class TableOverviewExample implements OnInit {

    displayedColumns = ['requestId', 'project_Code', 'country', 'actions', 'approve', 'disapprove'];
    dataSource: RequestDataSource;
    request: RequestData;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog, private requestService: RequestService, private gridService: GridService) {
        // Create 100 users
        
        
    }
    
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit() {
    //    this.dataSource.paginator = this.paginator;
    //    this.dataSource.sort = this.sort;
    }

    ngOnInit() {
        this.dataSource = new RequestDataSource(this.gridService);
        this.dataSource.loadRequests();

    }

    applyFilter(filterValue: string) {
        //filterValue = filterValue.trim(); // Remove whitespace
        //filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        //this.dataSource.filter = filterValue;
    }

    openDialog(id:number): void {


        let dialogRef = this.dialog.open(RequestDialog, {
            width: '80vw',
            height: '70vh',
            data: id
        });

        dialogRef.afterClosed().subscribe(result => {

            this.dataSource.loadRequests();

        });

                  
        
    }
}

/** Builds and returns a new User. */
export class RequestDataSource extends DataSource<any>
{
    
    private loadingRequestSubject = new BehaviorSubject<boolean>(false);

    constructor(private gridService : GridService) {
        super();
    }
    connect(): Observable<any[]> {
        
        
        return this.gridService.getGridData();
        
    }
    disconnect() {
        this.gridService.disconnect();
        this.loadingRequestSubject.complete();

    }

    loadRequests() {
        this.loadingRequestSubject.next(true);
        this.gridService.loadGridData();
            
        
    }

}

