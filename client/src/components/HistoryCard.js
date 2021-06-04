import React from "react";
import { Card, Row } from "react-bootstrap";
import History from './History';

function HistoryCard() {
    return (
        <Card className="card-genre" style={{ backgroundColor: "#f7d065" }}>
            <Card className="card-genre-body" style={{ backgroundColor: "#FAF9F6" }}>
                <Card.Body>
                    <Row>
                        <div className="icon-big text-left icon-warning">
                            <i className="nc-icon nc-chart text-warning"></i>
                        </div>
                        <History className="chart" />
                    </Row>
                </Card.Body>
            </Card>
        </Card>
    );
};

export default HistoryCard;